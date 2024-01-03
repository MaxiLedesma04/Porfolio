import Layout from '../layouts/Layout.astro';
import Card from '../components/Card.astro';

<Fragment>
<Layout title="Portfolio Maximiliano">
<header class="header">
<h4>Welcome to my porfolio!!</h4>
<ul class="nav">
<li>About me</li>
<li>My proyects</li>
<li>Contact</li>
</ul>
</header>
<main>
<h1>Porfolio <span class="text-gradient">Max</span></h1>
<div class="AboutMe">
<img class="img-transformer" src="./public/imagenes/MLtransform.png" alt="" />
<article class="AboutMe-article">
<p class="AboutMe-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quisquam, quod.
Quisquam, quod.
Quisquam, quod.
</p>
</article>
</div>
<div class="proyects">
<Card href="https://github.com/" title="Project 1" />
<Card href="https://github.com/" title="Project 2" />
<Card href="https://github.com/" title="Project 3" />

</div>
<section class="contact">
<div>
<h3>Phone number</h3>
<a href="watsapp://send?phone=+543777647163"><img src="./public/imagenes/whatsapp.png" alt="Whatsapp Icon" /></a>
</div>
<div>
<h3>Email Address</h3>
<img src="./public/imagenes/gmail.png" alt="Gmail Icon" />
</div>
<div>
<h3>Linkedin</h3>
<img src="./public/imagenes/linkedin.png" alt="Linkedin Icon" />
</div>
</section>
</main>
</Layout>

<style>{`
	main {
		margin: auto;
		padding: 1rem;
		width: 100%;
		max-width: calc(100% - 2rem);
		color: white;
		font-size: 20px;
		line-height: 1.6;
	}
	.astro-a {
		position: absolute;
		top: -32px;
		left: 50%;
		transform: translatex(-50%);
		width: 220px;
		height: auto;
		z-index: -1;
	}
	h1 {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1;
		text-align: center;
		margin-bottom: 1em;
	}
	.text-gradient {
		background-image: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
	}
	.header{
		display: flex;
		justify-content: space-between;
		color: antiquewhite;
	}
	.header h4{
		margin-left: 2rem;
		font-size: 1.2rem;
		background-image: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.nav{
		display: flex;
		justify-content: flex-end;
		margin-right: 2rem;
		align-items: center;
		list-style: none;
		gap: 1em;
		color: antiquewhite;
		font-size: 1.1em;
	}
	.AboutMe{
		margin-top: 3rem;
		display: flex;
		justify-content: center;
	}
	.img-transformer{
		width: 25rem;
		height: 29rem;
	}
	.AboutMe-article{
		width: 35rem;
		height: 22rem;
		margin-top: 3rem;
		display: flex;
		border: 2px solid antiquewhite;
	}
	.AboutMe-p{
		margin: 1.5rem;
	}
	.proyects{
		margin-top: 10rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	.contact{
		margin-top: 10rem;
		display: flex;
		justify-content: center;
		justify-content: space-around;
		color: antiquewhite;
		font-size: 1.1em;
	}
	.contact div{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.contact h3{
		padding: 0;
		margin: 0;
	}
	.contact img{
		width: 3rem;
		height: 3rem;
	}

`}</style>

</Fragment>;
