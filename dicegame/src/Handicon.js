import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const Images = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg
};

function HandIcon(props) {
  const src = Images[props.value];
  return <img src= {src} alt={props} />;
}

export default HandIcon;
