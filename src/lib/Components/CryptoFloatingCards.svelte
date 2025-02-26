<script lang="ts">
  import { onMount } from 'svelte';

  interface CryptoData {
    id: string;
    price: number;
    change: number;
    image: string;
    symbol: string;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
  }

  let cryptoData: CryptoData[] = [];
  let containerWidth: number;
  let containerHeight: number;
  let container: HTMLDivElement;

  const CARD_WIDTH = 200;
  const CARD_HEIGHT = 50;
  const MAX_SPEED = 1;

  function initializePositions() {
    const gridSize = Math.ceil(Math.sqrt(cryptoData.length));
    const cellWidth = containerWidth / gridSize;
    const cellHeight = containerHeight / gridSize;
    
    cryptoData = cryptoData.map((crypto, index) => {
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      
      // Place each card in the center of its grid cell
      const x = col * cellWidth + (cellWidth - CARD_WIDTH) / 2;
      const y = row * cellHeight + (cellHeight - CARD_HEIGHT) / 2;
      
      // Initialize with random speeds within bounds
      const speedX = (Math.random() - 0.5) * MAX_SPEED;
      const speedY = (Math.random() - 0.5) * MAX_SPEED;
      
      return {
        ...crypto,
        x,
        y,
        speedX,
        speedY
      };
    });
  }

  function handleWallCollision(position: number, speed: number, max: number, size: number): [number, number] {
    let newPosition = position;
    let newSpeed = speed;

    if (position <= 0) {
      newPosition = 0;
      newSpeed = Math.abs(speed) * 0.8;
    } else if (position >= max - size) {
      newPosition = max - size;
      newSpeed = -Math.abs(speed) * 0.8;
    }

    return [newPosition, newSpeed];
  }

  function animate() {
    cryptoData = cryptoData.map((crypto, index) => {
      let newX = crypto.x + crypto.speedX;
      let newY = crypto.y + crypto.speedY;
      let newSpeedX = crypto.speedX;
      let newSpeedY = crypto.speedY;

      // Handle wall collisions
      [newX, newSpeedX] = handleWallCollision(newX, newSpeedX, containerWidth, CARD_WIDTH);
      [newY, newSpeedY] = handleWallCollision(newY, newSpeedY, containerHeight, CARD_HEIGHT);

      // Clamp speeds
      newSpeedX = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, newSpeedX));
      newSpeedY = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, newSpeedY));

      return {
        ...crypto,
        x: newX,
        y: newY,
        speedX: newSpeedX,
        speedY: newSpeedY
      };
    });

    requestAnimationFrame(animate);
  }

  async function fetchCryptoData(): Promise<void> {
    try {
      // First fetch top 15 coins by market cap
      const topCoinsResponse = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=15&page=1&sparkline=false'
      );
      const topCoins = await topCoinsResponse.json();
      
      // Extract coin IDs
      const coinIds = topCoins.map((coin: any) => coin.id);
      const idsParam = coinIds.join(',');

      // Fetch current prices and 24h changes
      const priceResponse = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${idsParam}&vs_currencies=nzd&include_24hr_change=true`
      );
      const priceData = await priceResponse.json();

      cryptoData = topCoins.map((coinInfo: any): CryptoData => {
        const priceInfo = priceData[coinInfo.id];
        return {
          id: coinInfo.id,
          price: priceInfo.nzd,
          change: priceInfo.nzd_24h_change,
          image: coinInfo.image,
          symbol: coinInfo.symbol.toUpperCase(),
          x: 0,
          y: 0,
          speedX: 0,
          speedY: 0
        };
      });

      initializePositions();
      requestAnimationFrame(animate);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  }

  onMount(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  });
</script>

<div 
  class="floating-container" 
  bind:this={container}
  bind:clientWidth={containerWidth}
  bind:clientHeight={containerHeight}
>
  {#each cryptoData as crypto (crypto.id)}
    <div 
      class="crypto-card" 
      style="transform: translate({crypto.x}px, {crypto.y}px)"
    >
      <img src={crypto.image} alt={crypto.symbol} class="crypto-logo" />
      <span class="crypto-symbol">{crypto.symbol}</span>
      <span class="crypto-price">
        ${crypto.price.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
      <span 
        class="crypto-change" 
        class:positive={crypto.change > 0} 
        class:negative={crypto.change < 0}
      >
        {crypto.change > 0 ? '+' : ''}{crypto.change.toFixed(2)}%
      </span>
    </div>
  {/each}
</div>

<style>
  .floating-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -100;
    overflow: hidden;
    user-select: none;
  }

  .crypto-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.1s ease-out;
  }

  .crypto-logo {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .crypto-symbol {
    font-weight: 600;
    color: #383838e6;
    min-width: 50px;
  }

  .crypto-price {
    color: #383838e6;
    font-weight: 500;
  }

  .crypto-change {
    font-weight: 500;
    min-width: 80px;
    text-align: right;
  }

  .positive {
    color: #00ff9d;
  }

  .negative {
    color: #ff4b4b;
  }

  @media (max-width: 768px) {
    .crypto-card {
      font-size: 12px;
      padding: 8px;
    }
    
    .crypto-logo {
      width: 20px;
      height: 20px;
    }
  }
</style>