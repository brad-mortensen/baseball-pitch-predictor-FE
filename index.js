const bases = document.querySelectorAll(".base");
const handleBaseChange = e => {
  const el = e.target.classList;
  el.contains("clicked") ? 
    el.remove("clicked") : 
    el.add("clicked")
};
[...bases].forEach(base => base.addEventListener('click', handleBaseChange));
