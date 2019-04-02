<template>
  <div class="logo">
    <div class="logo__triangle inverse" />
    <div class="logo__triangle bottom left" />
    <div class="logo__triangle bottom right" />
  </div>
</template>

<style scoped lang="scss">
.logo {
  position: relative;
  background: #3b8070;
  width: 100px;
  height: 100px;
  margin: auto;
  border: solid white 1px;
  animation: color 1.5s ease forwards;
  transition: .5s;

  &__triangle {
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
    transition: .5s;
  }

  &--loading {
    animation: rotateAnimation 1.2s ease infinite;
  }
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

@keyframes rotateAnimation {
  from {
    transform: rotate3d(0, 1, 1, 0deg);
  }
  to {
    transform: rotate3d(0, 1, 1, 361deg);
  }
}
</style>
