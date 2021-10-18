function Card(props){
    return(
        <div class="card">
  <img className="imgsize"src={props.imgsrc}alt="card demos"width="300"  height="250" /> 
   <div class="card-body">
    <h5 class="card-title">Card title{props.title}</h5>
    <p class="card-text">{props.sname}</p>
    <a href={props.link} class="btn btn-primary stretched-link">watch now</a>
  </div>
  <hr />
  <br />
</div>
    );
}
export default Card;