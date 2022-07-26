<template>
  <div class="footer">
    <div>
      <img src="../images/twitter.png" alt="" srcset="" />
      <img src="../images/instagram.png" alt="" srcset="" />
    </div>
    <div>
      <p>&copy; Copyright 2022 WebDesign</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.footer img {
  width: 25px;
  height: 25px;
  padding: 5px;
  cursor: pointer;
  filter: grayscale(100);
}

.footer p {
  font-size: 12px;
  color: rgb(165, 165, 165);
}
</style>
