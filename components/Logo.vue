<template>
  <div class="logo">
    <div class="triangle inverse" />
    <div class="triangle bottom left" />
    <div class="triangle bottom right" />
  </div>
</template>

<style scoped>
.logo {
  position: relative;
  background: #3b8070;
  width: 100px;
  height: 100px;
  margin: auto;
  border: solid white 1px;
  animation: color 1.5s ease forwards;
}

.triangle {
  position: absolute;
  margin: auto;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 0 solid white;
  animation-name: height;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.left {
  left: 17%;
}

.right {
  right: 17%;
}

.bottom {
  bottom: 0;
}

.inverse {
  transform: rotate(180deg);
  left: 40%;
  top: -1px;
}

@keyframes height {
  from {
    border-bottom: 0 solid #3b8070;;
  }
  to {
    border-bottom: 50px solid white;
  }
}

@keyframes color {
  from {
    background: #35495e;
  }
  to {
    background: #3b8070;
  }
}
</style>
