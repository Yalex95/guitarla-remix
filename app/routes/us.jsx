
import styles from '~/styles/us.css'
import image from "../../public/img/nosotros.jpg";

export function meta() {
  return [
    { title: "GuitarLA - about us" },
    { description: "Guitars Shop, music blog"}
  ];
}
export function links(){
  return [
    
    {
      rel:'stylesheet',
      href:styles
  }
  ]
}

const Us = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Us</h2>
      <div className="contenido">
        <img src={image} alt="Image about us" />
        <div>
          <p>
            Fusce sed mauris ac velit sodales pharetra ut ac massa. Duis vel
            purus risus. Donec nulla erat, ullamcorper et nulla et, dignissim
            mollis turpis. Ut a metus elit. Vestibulum vulputate ligula eget
            tellus imperdiet, vel porta eros interdum. In et risus at dui
            laoreet ultricies. Phasellus scelerisque ornare mauris. Nunc id
            lorem ac dolor molestie congue.
          </p>
          <p>
            Proin viverra quam a felis rhoncus, id mollis turpis viverra. Morbi
            bibendum, massa sit amet vulputate vulputate, mauris nibh hendrerit
            justo, quis viverra quam tellus id risus. Morbi sit amet nunc at
            dolor hendrerit commodo. Nunc lectus nulla, varius nec tempor a,
            tristique vel nisi. Praesent mi dolor, sagittis ut est id, euismod
            eleifend ligula. Vestibulum nisl ipsum, viverra sit amet purus in,
            venenatis scelerisque dui. Morbi eros mauris, vehicula et gravida
            cursus, pulvinar eu velit.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Us;
