export const handleShowAccounts = (e, x) => {
  const accounts = document.getElementsByclass("accounts")[x];
  const accountsBg = document.querySelectorAll(".accountsBg")[x];
  console.log(x);
  console.log(accountsBg);

  if (e === "open") {
    accounts.style.display = "block ";
    accountsBg.style.display = "block ";
  }

  if (e === "close") {
    accounts.style.display = "none ";
    accountsBg.style.display = "none ";
  }
};

export const handleRange = (id) => {
  const input = id.target;
  input.style.background = `linear-gradient(90deg, #ffffff ${input.value}%, #484848 ${input.value}%)`;
};

export const handleMenu = (close) => {
  const menuBg = document.getElementById("menuBackground");
  const menu = document.getElementById("menu");

  if (close === "close") {
    menu.style.transition = "1s";
    menu.style.right = "100%";
    if (menu.style.right === "100%") {
      menuBg.style.display = "none";
    }
    return;
  }

  menuBg.style.display = "grid";
  menu.style.transition = "1s";
  menu.style.right = "0%";
};
