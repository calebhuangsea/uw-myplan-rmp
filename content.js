function inject(num) {
  // const info = document.querySelectorAll("tr");
	const info = document.getElementsByClassName("mb-1");
	if (info.length === 0) {
		if (num < 20) {
			setTimeout(() => {
				inject(num + 1);
			}, 1000);
		}
		return;
	}
  for (let i = 0; i < info.length; i++) {
    const names = info[i].textContent.split(" ");

    var href = "https://www.ratemyprofessors.com/search/teachers?query="  + names.join("%20") + "&sid=U2Nob29sLTE1MzA=";
    // link info[i] to href
    console.log(href);
    console.log(info[i].textContent);
    info[i].innerHTML = "<a href=" + href + ">" + info[i].textContent + "</a>";
  }
}

setTimeout(() => {
	inject(0);
}, 1000);
