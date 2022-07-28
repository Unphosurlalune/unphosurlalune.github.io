<script>
	let name = 'world';
import PageTitle from '$lib/pageTitle.svelte';
	import CardBook from './card.svelte';
	let books = [
    {"originalName":"IDEES RECUES", "img":"IR1", "languages":["fr", "en", "de", "it", "es", "cn", "mm"]},
    {"originalName":"IDEES RECUES 2", "img":"IR2", "languages":["fr", "de"]},
    {"originalName":"IDEES RECUES 3", "img":"IR3", "languages":["fr"]},
    {"originalName":"ROBI", "img":"ROBI", "languages":["fr", "en", "de", "mm"], "desc":"Métro, boulot, dodo… tel semble constituer l’existence de Jean-Philippe Robert Sakamoto jusqu’à ce fameux matin où, devant le miroir, il prend conscience qu’il souffre d’une inquiétante malformation…"},
    {"originalName":"WILLY GRUNCH", "img":"GRUNH-1", "languages":["fr"]},
    {"originalName":"WILLY GRUNCH 2", "img":"GRUNH-2", "languages":["fr"]},
    {"originalName":"MARCEL", "img":"MARCEL-1", "languages":["fr", "de", "cn"]},
    {"originalName":"MARCEL 2", "img":"MARCEL-2", "languages":["fr"]},
    {"originalName":"MARCEL 3", "img":"MARCEL-3", "languages":["fr"]},
    {"originalName":"LES SOUVENIRS D'AZVALTYA", "img":"AZ1", "languages":["fr"], "desc":"Des routes qui se déplacent, des montagnes indociles qui ne se laissent pas facilement chevaucher et des forêts de fleurs géantes aux allures de baobabs…"},
    {"originalName":"LES SOUVENIRS D'AZVALTYA 2", "img":"AZ2", "languages":["fr"], "desc":"Azvaltya est un monde de rêve, une sorte de parabole qui fait allusion à notre vie intérieure, à nos pensées et à nos émotions."},
    {"originalName":"LES SOUVENIRS D'AZVALTYA 3", "img":"AZ3", "languages":["fr"], "desc": "La conscience de Marcel s’éveille enfin aux questions existentielles. Marcel rentre en contact avec sa conscience qui lui explique ce qu’il savait déjà sans le savoir… Il lui révèle ce qu’est Azvaltya."},
    {"originalName":"RENDEZ-VOUS DANS LA FORÊT", "img":"RDVF1", "languages":["fr", "en", "de"], "desc": "Je passe souvent par des raccourcis dans la forêt pour me rendre à mon atelier et c'est zarbi, car j'habite juste à l'étage du dessus !"},
    {"originalName":"RENDEZ-VOUS DANS LA FORÊT 2", "img":"RDVF2", "languages":["fr"], "desc": "J'ai un rendez-vous pour le moins étrange au fin fond des bois à  3 heures du matin ! Et vous n'imaginez même pas avec qui ?…  Dieu !"},
    {"originalName":"RENDEZ-VOUS DANS LA FORÊT 3", "img":"RDVF3", "languages":["fr"], "desc": "Dans ce troisième tome, Alain Auderset se rend compte que Dieu nous parle souvent et qu'il est possible de l'entendre ! Quelle que soit votre (non) croyance, lisez ce livre !"},
    {"originalName":"RENDEZ-VOUS DANS LA FORÊT ORIGINE", "img":"RDVFO", "languages":["fr"]},
    {"originalName":"BD SANS PAROLES", "img":"BDSP", "languages":["ALL"]}
];
</script>

<PageTitle title="Livre d'Auderset"></PageTitle>
<div class="book-grid">
{#each books as book}
	<CardBook book={book}/>
{/each}
</div>


    <style>
    .book-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 20px;
      margin-top: 20px;
    }
    </style>