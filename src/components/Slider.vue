<template>
  <div class="main-section">
    <div class="text">
      <h1>
        Award Winning <br />
        toys for childrem
      </h1>
      <p>Creative, timeless toys for children of all ages!</p>
      <button>Shop Now</button>
    </div>
    <div class="img"><img src="../images/section1BG.png" alt="" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  justify-content: space-between;
  background-color: #f8f4ed;
}

.main-section img {
  position: relative;
  width: 500px;
  height: 300px;
}

.main-section .text h1 {
  padding: 20px 0;
}
.main-section .text {
  text-align: left;
}
.main-section .text p {
  text-align: left;
  color: rgb(136, 136, 136);
}
.main-section .text button {
  padding: 10px;
  margin-top: 20px;
  background-color: #ff714c;
  border-radius: 20px;
  border: none;
  color: white;
  text-align: center;
}

@media (max-width: 919px) {
  .main-section img {
    display: none;
  }
  .main-section {
    grid-template-columns: 1fr;
  }
  .main-section .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
@media (max-width: 767px) {
  .main-section .text {
    text-align: center;
    padding-left: 0px;
  }
}
</style>
