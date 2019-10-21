<template>
	<div class="AboutUs">
			<div class="title">
				<h1>About Us</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui delectus laboriosam quae amet ipsam autem voluptate suscipit debitis, dolorem officia sit soluta obcaecati in laborum, consectetur corrupti voluptatum eum?</p>
			</div>
			<div class="people">
				<div class="person person_black">
					<div class="person_img">
						<img src="../assets/Meet__our1.jpg" alt="">
					</div>
					<div class="text">
						<h4>Adam Suarez
							<span>Attorney General</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil assumenda rem in minima iste officiis quaerat voluptate, consectetur, quasi iusto laudantium repellat cupiditate, odit modi. Quos molestiae et ipsam nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!</p>
					</div>
				</div>
				<div class="person">
					<div class="text">
						<h4>Lina Suarez
						<span>Attorney General</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est odit sapiente, magni harum impedit, omnis amet, adipisci labore recusandae fuga laboriosam veritatis nobis ea sunt, sint quisquam sit pariatur illum!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!</p>
					</div>
					<div class="person_img">
							<img src="../assets/Meet__our2.jpg" alt="">
						</div>
				</div>
				<div class="person person_black">
					<div class="person_img">
						<img src="../assets/Meet__our3.jpg" alt="">
					</div>
					<div class="text">
						<h4>Jems Snow
						<span>Attorney General</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!</p>
					</div>
				</div>
				<div class="person">
					<div class="text">
						<h4>Linister White
						<span>Attorney General</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est culpa, repellendus reprehenderit ab architecto nobis nulla distinctio, impedit voluptatem aperiam eius provident eveniet expedita! Fugiat dolorem, neque maiores incidunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repellendus ratione architecto, fugit minus laborum et magni, sapiente velit itaque accusantium odit, eaque iusto perspiciatis soluta nemo. Id, odio, numquam!</p>
					</div>
					<div class="person_img">
						<img src="../assets/Meet__our4.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
    name: 'AboutUs',
}
</script>

<style scoped>
.AboutUs {
  margin: 0 0 50px 0;
  padding: 0px 30px; }
  .AboutUs .title {
    -webkit-box-shadow: 20px 0px 10px rgba(0, 0, 0, 0.3), -20px 0px 10px rgba(0, 0, 0, 0.3);
            box-shadow: 20px 0px 10px rgba(0, 0, 0, 0.3), -20px 0px 10px rgba(0, 0, 0, 0.3);
    padding: 30px 60px; }
    .AboutUs .title h1 {
      font-size: 24px;
      margin: 0px; }
    .AboutUs .title p {
      margin-top: 5px; }
  .AboutUs .people {
    display: block;
    background-color: #DEDEDE;
    -webkit-box-shadow: 20px 0px 10px rgba(0, 0, 0, 0.3), -20px 0px 10px rgba(0, 0, 0, 0.3);
            box-shadow: 20px 0px 10px rgba(0, 0, 0, 0.3), -20px 0px 10px rgba(0, 0, 0, 0.3); }
    .AboutUs .people .person {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
          -ms-flex-pack: end;
              justify-content: flex-end;
      padding: 30px 60px; }
      .AboutUs .people .person_img {
        display: block;
        width: 30%; }
        .AboutUs .people .person_img img {
          width: 100%; }
      .AboutUs .people .person .text {
        display: block;
        width: 65%;
        padding-right: 70px;
        margin-right: 30px;
        margin-top: 0px;
        color: #333333; }
    .AboutUs .people .person_black {
      background-color: #4A4749;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-justify-content: space-around;
          -ms-flex-pack: distribute;
              justify-content: space-around;
      /* width: 100%;  */
      }
      .AboutUs .people .person_black .person_img {
        display: block;
        margin: 0; }
        .AboutUs .people .person_black .person_img img {
          width: 100%; }
      .AboutUs .people .person_black .text {
        display: block;
        width: 65%;
        padding-left: 0px;
        margin-left: 30px;
        padding-right: 0px;
        margin-right: 0px;
        margin-top: 0px;
        color: #DEDEDE; }
  @media (max-width: 524px) {
    .AboutUs .people .person {
      display: block;
      padding: 30px 60px; }
    .AboutUs .people .person_img {
      display: block;
      width: 100%; }
    .AboutUs .people .person .text {
      display: block;
      width: 100%;
      padding-right: 0px;
      margin-right: 0px;
      margin-top: 40px; }
    .AboutUs .people .person_black {
      background-color: #4A4749;
      display: block; }
    .AboutUs .people .person_black .text {
      margin-left: 0px; }
  }
</style>