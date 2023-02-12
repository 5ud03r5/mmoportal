import GiveawaysList from "@/components/GiveawaysList";

function Giveaways(props) {
  return <GiveawaysList data={props.giveaways}></GiveawaysList>;
}

export default Giveaways;

export async function getStaticProps() {
  const res = await fetch("https://www.mmobomb.com/api1/giveaways");
  const giveaways = await res.json();

  return {
    props: {
      giveaways: giveaways,
    },
  };
}
