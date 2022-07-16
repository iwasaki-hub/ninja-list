const CoinList = ({ coinData }) => {


  return (
    <div>

      {coinData.coins.map((coin) => {
        return (
          <div key={coin.id}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} alt={coin.icon} />
            <p>{coin.price}</p>
          </div>
        )
      })}
    </div>
  )
}


export const getStaticProps = async () => {

  const response = await fetch("https://api.coinstats.app/public/v1/coins?skip=0")
  const data = await response.json();

  return {
    props: {
      coinData: data,
    },
    revalidate: 10,
  }
}




export default CoinList