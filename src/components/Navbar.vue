<template>
<header>
  <!-- <nav :class="{ navShadow: $route.name === 'edit.resume' }"> -->
    <nav class="">
    <div id="brand">
      <div id="logo"> <img id="logo" src="@/assets/logo.png" alt="CV Designer"></div>
      <div id="word-mark">&nbsp;CV Designer</div>
    </div>
    <div id="menu">
        <!-- <div id="menu-icon"> -->
      <!-- <ul v-if="$route.name == 'edit.resume'"> -->
        <ul>
        <li><a href="#section00"></a></li>
        <li style="color: #fff;"><a href="#section01"> Download PDF</a></li>
      </ul>
    </div>
  </nav>
</header>

  </template>
  
  <script>
  export default {
    emits: ['onExport', 'onWordExport'],
    data() {
      return {
      }
    },
  };
  </script>
  
  <style scoped>
  .flex-grow {
    flex-grow: 1;
  }
  .resume-menu {
  margin: 0 20px; /* Adds 20px margin on both sides */
  padding: 0 10px; /* Adds 10px padding on both sides (optional) */
}


/*** Mixins & Default Styles ***/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
}

/*** Color Variables ***/
/*** Centering Hack ***/
/*** Header Styles ***/
header {
  width: 100vw;
  height: 10vh;
  background: #5661f2;
  display: flex;
}

/*** Navigation Styles ***/
nav {
  width: 100vw;
  height: 150px;
  background: #46b2f0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  z-index: 10;
  transition: all 0.3s;
}
nav.navShadow {
  box-shadow: 0 4px 30px -5px rgba(0, 0, 0, 0.2);
  height: 64px;
}
nav.navShadow #word-mark {
  opacity: 0;
}

#brand,
#menu,
ul {
  display: flex;
  align-items: center;
}

#brand {
  padding-left: 40px;
}

#logo {
  width: 55px;
  height: 55px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

#word-mark {
  width: 120px;
  height: 20px;
  background: #fff;
  border-radius: 90px;
  margin-left: 20px;
  opacity: 1;
  transition: all 0.3s;
}



/*** Menu Styles ***/
#menu {
  justify-content: flex-end;
  padding-right: 40px;
}

li {
  margin-left: 20px;
}
li a {
  width: 80px;
  height: 20px;
  background: #fff;
  display: block;
  border-radius: 90px;
}

#menu-toggle {
  width: 55px;
  height: 55px;
  background: #2ea8ee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: none;
}
#menu-toggle:hover .bar {
  width: 25px;
}
#menu-toggle.closeMenu .bar {
  width: 25px;
}
#menu-toggle.closeMenu .bar:first-child {
  transform: translateY(7px) rotate(45deg);
}
#menu-toggle.closeMenu .bar:nth-child(2) {
  transform: scale(0);
}
#menu-toggle.closeMenu .bar:last-child {
  transform: translateY(-7px) rotate(-45deg);
}

.bar {
  width: 25px;
  height: 2px;
  background: #fff;
  transition: 0.3s ease-in-out;
}
.bar:nth-child(2) {
  width: 20px;
  margin: 5px 0;
}
.bar:last-child {
  width: 15px;
}

/*** Responsive Menu For Smaller Device ***/
@media screen and (max-width: 767px) {
  #menu-toggle {
    display: flex;
  }

  ul {
    display: inline-block;
    width: 100vw;
    height: 0;
    background: #79edfc;
    position: absolute;
    top: 160px;
    box-shadow: 0 5px 30px -4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  ul.showMenu {
    height: 250px;
  }
  ul.showMenu li {
    height: 80px;
    opacity: 1;
    visibility: visible;
  }

  li {
    width: 50%;
    height: 80px;
    float: left;
    padding-left: 40px;
    opacity: 0;
    visibility: hidden;
    margin-left: 0;
    transition: all 0.3s 0.1s;
  }
  li:first-child, li:nth-child(2) {
    margin-top: 80px;
  }

  #head-line {
    transform: scale(0.8);
  }
}

  </style>
  