function survay() {
 var random = Math.floor(Math.random()*3);
 var link = "";
if (random == 0) {
link = 'https://s.surveyplanet.com/zflwwxtn';

} else if (random == 1) {
link = 'https://s.surveyplanet.com/8oxg516a';

} else if (random == 2) {
link = 'https://s.surveyplanet.com/hjz6nw7u';
}
window.location.replace(link);
}
