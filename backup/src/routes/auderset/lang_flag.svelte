<script>
	export let lang = 'fr';
let langValue = {
    'fr': "🇫🇷",
    'de': "🇩🇪",
    'en': "🇬🇧",
    'it': "🇮🇹",
    'cn': "🇨🇳",
    'mm': "🇲🇲",
    'es': "🇪🇸",
    'ALL': "🌐"
};
</script>

<div class="size">{langValue[lang]}</div>

<style>

.size {
  padding: 2px 5px;
  border: 1px solid #262626;
  font-size: 1em;
  text-align: center;
}
.size:hover {
  background: #46BB5D;
  border: 1px solid #46BB5D;
  color: #f5f5f5;
  transition: all 0.4s ease-in-out;
}
</style>