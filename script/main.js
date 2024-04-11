let firstLoad = true;

const toastLiveExample = document.getElementById("liveToast");
window.addEventListener('scroll', function() {
  if (firstLoad) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
    firstLoad = false; // بعد از اولین اجرا، پرچم را به false تغییر دهید
  }
});
