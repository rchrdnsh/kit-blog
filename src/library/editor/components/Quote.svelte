<script>
  export let value = `Edit this text to find inner peace.`;
</script>

<div class='container'>
  <div class='quote-box'>

    <div class='left-quote'>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M33 35.4025C33 25.4025 46.5 15.4025 46.5 15.4025C47.5 14.4025 49 15.4025 48 16.9025C48 16.9025 38.5 29.4025 40.5 34.4025C43 31.4025 46.5 31.4025 49.5 32.4025C52.5 33.4025 54.9701 36.2706 55 39.9025C55.0376 44.4608 50 48.4025 44.5 48.4025C39 48.4025 33 45.4025 33 35.4025Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 35.4025C8 25.4025 21.5 15.4025 21.5 15.4025C22.5 14.4025 24 15.4025 23 16.9025C23 16.9025 13.5 29.4025 15.5 34.4025C18 31.4025 21.5 31.4025 24.5 32.4025C27.5 33.4025 29.9701 36.2706 30 39.9025C30.0376 44.4608 25 48.4025 19.5 48.4025C14 48.4025 8 45.4025 8 35.4025Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <p contenteditable>{value}</p>

    <div class='right-quote'>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30.0002 28C30.0002 38 16.5002 48 16.5002 48C15.5002 49 14.0002 48 15.0002 46.5C15.0002 46.5 24.5002 34 22.5002 29C20.0002 32 16.5002 32 13.5002 31C10.5002 30 8.03018 27.132 8.00025 23.5C7.96268 18.9417 13.0002 15 18.5002 15C24.0002 15 30.0002 18 30.0002 28Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
        <path
          d="M55.0002 28C55.0002 38 41.5002 48 41.5002 48C40.5002 49 39.0002 48 40.0002 46.5C40.0002 46.5 49.5002 34 47.5002 29C45.0002 32 41.5002 32 38.5002 31C35.5002 30 33.0302 27.132 33.0002 23.5C32.9627 18.9417 38.0002 15 43.5002 15C49.0002 15 55.0002 18 55.0002 28Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 160px;
    grid-column: 1 / 4;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    display: grid;
    place-content: center;
		border-radius: 16px;
  }

  .quote-box {
    background-color: white;
    border-radius: 16px;
    padding: 0px 16px;
    height: min-content;
		height: 96px;
		width: min-content;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    display: grid;
    border: 1px solid black;
  }

  p {
    font-size: 16px;
    font-family: var(--text-font);
    color: black;
    padding: 16px 32px;
    line-height: 1;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		z-index: 1;
		white-space: nowrap;
		align-self: center;
  }

  .left-quote, .right-quote {
    font-family: serif;
    font-size: 64px;
    /* border: 1px solid red; */
    line-height: 1;
    width: 64px;
    height: 64px;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		z-index: 2;
    filter: drop-shadow(2px 2px 4px hsla(0, 0%, 0%, 0.25));
  }

  .left-quote {
    place-self: start;
    margin-left: -32px;
    margin-top: -28px;
  }

  .right-quote {
    place-self: end;
    justify-self: end;
    margin-right: -32px;
    margin-bottom: -28px;
  }

  path {
    stroke: black;
    stroke-width: 1;
    fill: white;
  }
	
	[contenteditable] {
   -webkit-user-select: text;
    user-select: text;
		padding: 8px;
		line-height: 1.5;
		outline: none;
		cursor: text;
		transition: border-color 250ms;
		border: 1px dashed;
		border-radius: 8px;
		border-color: white;
	}
	
	[contenteditable]:hover  {
		border-color: #ddd;
		background-color: white;
		border-radius: 8px;
	}
    
  </style>