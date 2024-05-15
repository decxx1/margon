<script setup>
import { computed, ref, watch } from 'vue';
const props = defineProps({

  onChange: {
    type: Function,
  },

});

const currentFilter = ref('all');
watch(
    () => props.currentFilter,
    () => {
        if(props.currentFilter){
            currentFilter.value = props.currentFilter
        }
    }
);

const handleFilterChange =  (filter) => {
    currentFilter.value = filter;
    props.onChange(currentFilter.value);
}
</script>
<template>
    <section>
                <div class="container lg:max-w-screen-lg mx-auto">
                            <!-- Categories List -->
                            <div class="categories categories-view1 max-sm:px-4">
                                <ul class="grid grid-cols-12 gap-4">
                                    <li class="md:col-span-6 col-span-12">
                                        <div @click="handleFilterChange('Línea Salados')" :class="[currentFilter === 'Línea Salados' ? 'text-primary-700 shadow-lg scale-105' : 'text-primary-950','categories-view1-wrap border border-primary-200 cursor-pointer  hover:scale-105 hover:text-primary-700 hover:shadow']">
                                            <img src="/images/logos/sabores_del_sol.svg" alt="logo sabores del sol" class="max-w-16 pr-5 pb-5" />
                                            <p class="">Línea Salados</p><br/>
                                            <span class="soup w-20 h-20" ></span>
                                        </div>
                                    </li>
                                    <li class="md:col-span-6 col-span-12">
                                        <div @click="handleFilterChange('Línea Dulces, Panadería y Repostería')" :class="[currentFilter === 'Línea Dulces, Panadería y Repostería' ? 'text-primary-700 shadow-lg scale-105' : 'text-primary-950','categories-view1-wrap border border-primary-200 cursor-pointer hover:scale-105 hover:text-primary-700 hover:shadow']">
                                            <img src="/images/logos/aral_azul.svg" alt="logo aral" class="max-w-16 pr-5 pb-5" />
                                            <p class="">Línea Dulces, Panadería y Repostería</p><br/>
                                            <span class="dessert w-20 h-20"></span>
                                        </div>
                                    </li>
                                    <li class="md:col-span-6 col-span-12">
                                        <div @click="handleFilterChange('Línea Golosinas')" :class="[currentFilter === 'Línea Golosinas' ? 'text-primary-700 shadow-lg scale-105' : 'text-primary-950','categories-view1-wrap border border-primary-200 cursor-pointer hover:scale-105 hover:text-primary-700 hover:shadow']">
                                            <img src="/images/logos/aralito.svg" alt="logo aralito" class="max-w-16 pr-5 pb-5" />
                                            <p class="">Línea Golosinas</p><br/>
                                            <span class="candies w-20 h-20"></span>
                                        </div>
                                    </li>
                                    <li class="md:col-span-6 col-span-12">
                                        <div @click="handleFilterChange('Línea Cócteles')" :class="[currentFilter === 'Línea Cócteles' ? 'text-primary-700 shadow-lg scale-105' : 'text-primary-950','categories-view1-wrap border border-primary-200 cursor-pointer hover:scale-105 hover:text-primary-700 hover:shadow']">
                                            <img src="/images/logos/viejo_minero.svg" alt="logo viejo minero" class="max-w-16 pr-5 pb-5" />
                                            <p class="">Línea Cócteles</p><br/>
                                            <span class="drink w-20 h-20"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- Categories List -->

                            <div class="more-spacer"></div>
                           
                        </div>
                    </section>
</template>
<style scoped>
.categories-view1-wrap p,
.categories-view1-wrap p:active,
.categories-view1-wrap p:focus {
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}
.fancy-title-view1 {
  float: left;
  width: 100%;
  margin-bottom: 70px;
  text-align: center;
}
.fancy-title-view1 h2 {
  margin-bottom: 8px;
  font-size: 40px;
  font-weight: 700;
  display: block;
}
.fancy-title-view1 p {
  margin-bottom: 0px;
  display: inline-block;
  width: 65%;
}
.fancy-title-view1 i {
  font-size: 22px;
}
.fancy-title-view1-color h2,
.fancy-title-view1-color p {
  color: #ffffff;
}

.light-transparent {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.65;
  background-color: #000;
}
.categories-view1-full {
  padding: 80px 0px 80px 0px;
  margin-top: 0;
  margin-bottom: 0;
  background: url(https://i.ibb.co/r4xf3sK/newslater.jpg);
  background-attachment: fixed;
  position: relative;
  min-height: 100vh;
}
.categories,
.categories-view1-wrap {
  float: left;
  width: 100%;
}
.categories ul li {
  list-style: none;
}
.categories > ul > li {
  float: none;
  display: inline-block;
  margin: 0px 0px 30px 0px;
  vertical-align: top;
}
.categories-view1-wrap {
  padding: 30px 50px 30px 95px;
  border-radius: 10px;
  position: relative;
  background-color: #ffffff;
}
.categories-view1 i,.categories-view1 img  {
  position: absolute;
  left: 0px;
  top: 50%;
  
  border-radius: 0 100% 100% 0;
  padding-top: 18px;
  margin-top: -36px;
  background-color: #ffffff;
  border: 1px solid #fcdaac;
  border-left: none;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.categories-view1 li:hover i {
  color: #ffffff;
  background-color: #274160;
}
.categories-view1 a,.categories-view1 p {
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0px;
}
.categories-view1 small {
  font-size: 13px;
  color: #666;
}
.categories-view1 span {
  position: absolute;
  right: 5px;
  top: 16px;
  font-size: 90px;
  font-weight: 500;
  color: #999;
  opacity: 0.07;
  line-height: 1;
}
.main-load-btn {
  float: left;
  width: 100%;
  text-align: center;
  margin: 30px 0px;
}
.main-load-btn a {
  display: inline-block;
  line-height: 1;
  padding: 18px 45px;
  color: #ffffff;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-color: #fb236a;
}
.main-load-btn a:hover {
  background-color: #274160;
}
.more-spacer {
  float: left;
  width: 100%;
  margin: 10px 0px;
}
.dessert {
        display: inline-block;
        background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20width%3D%22512%22%20height%3D%22512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20viewBox%3D%220%200%20682.667%20682.667%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%20clipPathUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M0%20512h512V0H0Z%22%20data-original%3D%22%23000000%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cpath%20fill%3D%22%23ffcb7c%22%20d%3D%22M471.439%20322.097h-424v-224h424z%22%20data-original%3D%22%23ffcb7c%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22matrix(1.33333%200%200%20-1.33333%200%20682.667)%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M471.439%20242.097h-424v-64h424z%22%20data-original%3D%22%23ffffff%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22matrix(1.33333%200%200%20-1.33333%200%20682.667)%22%2F%3E%3Cg%20clip-path%3D%22url(%23a)%22%20transform%3D%22matrix(1.33333%200%200%20-1.33333%200%20682.667)%22%3E%3Cpath%20fill%3D%22%23ededed%22%20d%3D%22M0%200h-344c-26.51%200-48%2021.49-48%2048H48C48%2021.49%2026.51%200%200%200%22%20data-original%3D%22%23b0e7f8%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(428%2010.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200v0c0-26.51-21.49-48-48-48h-344c-26.51%200-48%2021.49-48%2048%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(476%2058.097)%22%2F%3E%3Cpath%20fill%3D%22%23c3c3c3%22%20d%3D%22M0%200h-452c-11.046%200-20%208.954-20%2020%200%2011.045%208.954%2020%2020%2020H0c11.046%200%2020-8.955%2020-20C20%208.954%2011.046%200%200%200%22%20data-original%3D%22%23cff1fb%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(482%2058.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200h-181.29c-11.045%200-20%208.954-20%2020%200%2011.045%208.955%2020%2020%2020h452c11.046%200%2020-8.955%2020-20%200-11.046-8.954-20-20-20H90%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(211.29%2058.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200v0%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(256.29%2058.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200h153.455%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(48.879%20242.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200h74.083%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(395.918%20178.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200h280.455%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(48.879%20178.097)%22%2F%3E%3Cpath%20fill%3D%22%23f47f2a%22%20d%3D%22m0%200-298%20126c-69.588%200-126-56.412-126-126h136.101c13.255%200%2024-10.745%2024-24v-88.649c0-17.496%2014.423-31.623%2032.028-31.141%2016.969.465%2030.279%2014.814%2030.279%2031.79l-.001%2063.236c0-17.205%2013.948-31.153%2031.154-31.153%2017.205%200%2031.153%2013.948%2031.153%2031.153v-93.161c0-17.496%2014.423-31.624%2032.028-31.141%2016.969.465%2030.278%2014.814%2030.278%2031.789V-24c0%2013.255%2010.745%2024%2024%2024z%22%20data-original%3D%22%23f5737f%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(471.44%20322.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22m0%200-42.769%2018.083c-69.587%200-126-56.412-126-126v-224h424v224L75.381-31.873%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(216.208%20430.013)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200h-48.291c-13.254%200-24-10.745-24-24l.001-117.277c0-16.975-13.309-31.324-30.278-31.789-17.605-.483-32.028%2013.645-32.028%2031.141v93.161c0-17.205-13.948-31.153-31.154-31.153-17.205%200-31.153%2013.948-31.153%2031.153l.001-63.236c0-16.976-13.31-31.325-30.279-31.79-17.605-.482-32.028%2013.645-32.028%2031.141V-24c0%2013.255-10.745%2024-24%2024H-415.75%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(466.75%20322.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200h74.083%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(395.916%20242.097)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200c0%2024.544%2019.861%2044.404%2044.404%2044.404%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(256.015%20457.499)%22%2F%3E%3Cpath%20fill%3D%22%23ff9d6c%22%20d%3D%22M0%200c0-21.985-17.822-39.807-39.807-39.807-21.985%200-39.807%2017.822-39.807%2039.807%200%2021.985%2017.822%2039.807%2039.807%2039.807C-17.822%2039.807%200%2021.985%200%200%22%20data-original%3D%22%23ff9d6c%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(295.822%20417.692)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2220%22%20d%3D%22M0%200c0-21.985-17.822-39.807-39.807-39.807-21.985%200-39.807%2017.822-39.807%2039.807%200%2021.985%2017.822%2039.807%2039.807%2039.807C-17.822%2039.807%200%2021.985%200%200Z%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A20%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(295.822%20417.692)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }
  .candies{
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20width%3D%22512%22%20height%3D%22512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20viewBox%3D%220%200%20511%20511.999%22%3E%3Cpath%20fill%3D%22%23ea5471%22%20d%3D%22M147.297%20504.242H54.078c-18.984%200-31.637-19.426-23.82-36.574l25.71-56.402h89.438l25.711%2056.402c7.82%2017.148-4.832%2036.574-23.82%2036.574zM102.324%2086.215C88.66%2073.05%2093.172%2050.199%20110.81%2043.19l29.812-11.847H54.078c-18.984%200-31.637%2019.57-23.82%2036.84L55.968%20125h86.61zm0%200%22%20data-original%3D%22%23ea5471%22%2F%3E%3Cpath%20fill%3D%22%23da1c4b%22%20d%3D%22m50.258%20467.668%2025.715-56.402h-20l-25.715%2056.402c-7.817%2017.148%204.836%2036.574%2023.82%2036.574h20c-18.984%200-31.637-19.426-23.82-36.574zm23.82-436.324h-20c-18.984%200-31.637%2019.57-23.82%2036.84L55.973%20125h20L50.258%2068.184c-7.817-17.27%204.836-36.84%2023.82-36.84zm0%200%22%20data-original%3D%22%23da1c4b%22%2F%3E%3Cpath%20fill%3D%22%23f98c96%22%20d%3D%22m175.969%20327.113-38.492-95.172-28.325-70.02c-3.629-8.972.864-19.234%209.985-22.808l28.12-11.015-4.679-4.442H25.703c-9.816%200-17.848%207.903-17.848%2017.559V394.37c0%209.656%208.032%2017.559%2017.848%2017.559h154.66c9.817%200%2017.848-7.903%2017.848-17.559v-12.277zm0%200%22%20data-original%3D%22%23f98c96%22%2F%3E%3Cpath%20fill%3D%22%23ea5471%22%20d%3D%22M27.855%20394.371V141.215c0-9.656%208.032-17.559%2017.848-17.559h-20c-9.816%200-17.848%207.903-17.848%2017.559V394.37c0%209.656%208.032%2017.559%2017.848%2017.559h20c-9.816%200-17.848-7.903-17.848-17.559zm0%200%22%20data-original%3D%22%23ea5471%22%2F%3E%3Cpath%20fill%3D%22%23fff69a%22%20d%3D%22M131.262%20216.578H7.855v102.434h164.836c-5.71-14.121-35.71-88.293-41.43-102.434zm0%200%22%20data-original%3D%22%23fff69a%22%2F%3E%3Cpath%20fill%3D%22%23ffd782%22%20d%3D%22M7.855%20216.578h20v102.434h-20zm0%200%22%20data-original%3D%22%23ffd782%22%2F%3E%3Cpath%20fill%3D%22%23ffd782%22%20d%3D%22M151.977%20267.793H7.855v51.215h164.836zm0%200%22%20data-original%3D%22%23ffd782%22%2F%3E%3Cpath%20fill%3D%22%23fdbd40%22%20d%3D%22M7.855%20267.793h20v51.219h-20zm0%200%22%20data-original%3D%22%23fdbd40%22%2F%3E%3Cpath%20fill%3D%22%2332b1cc%22%20d%3D%22M194.387%209.102%20109.16%2043.02c-17.355%206.91-21.672%2029.73-8.125%2042.968l44.559%2043.543%2081.765-32.543%202.453-62.254c.75-18.925-18.07-32.543-35.425-25.632zm0%200%22%20data-original%3D%22%2332b1cc%22%2F%3E%3Cpath%20fill%3D%22%231695b7%22%20d%3D%22M121.023%2085.988c-13.546-13.238-9.23-36.058%208.125-42.968L213.77%209.34c-5.891-2.512-12.743-2.883-19.383-.238L109.16%2043.02c-17.355%206.91-21.672%2029.73-8.125%2042.968l44.559%2043.543c4.625-1.844%209.398-3.742%2014.203-5.652zm0%200%22%20data-original%3D%22%231695b7%22%2F%3E%3Cpath%20fill%3D%22%2332b1cc%22%20d%3D%22m369.258%20448.477-85.223%2033.918c-17.36%206.91-36.226-6.832-35.527-25.868l2.308-62.62%2081.766-32.544%2044.707%2043.91c13.594%2013.348%209.328%2036.297-8.031%2043.204zm0%200%22%20data-original%3D%22%2332b1cc%22%2F%3E%3Cpath%20fill%3D%22%231695b7%22%20d%3D%22m268.512%20456.527%201.793-48.668a21.423%2021.423%200%200%201%2013.488-19.117c19.996-7.957%2040.789-16.234%2054.559-21.715l-5.77-5.664-81.766%2032.543-2.308%2062.621c-.7%2019.035%2018.168%2032.778%2035.527%2025.868l.653-.262c-9.551-4.086-16.61-13.828-16.176-25.606zm0%200%22%20data-original%3D%22%231695b7%22%2F%3E%3Cpath%20fill%3D%22%2387cee9%22%20d%3D%22m258.75%2082.836-141.398%2056.277c-8.973%203.57-13.391%2013.836-9.82%2022.809l93.613%20235.21c3.574%208.973%2013.835%2013.391%2022.812%209.821l141.395-56.277c8.976-3.57%2013.394-13.836%209.824-22.809L281.559%2092.66c-3.57-8.976-13.836-13.394-22.809-9.824zm0%200%22%20data-original%3D%22%2387cee9%22%2F%3E%3Cpath%20fill%3D%22%2332b1cc%22%20d%3D%22m221.809%20390.133-94.235-236.77c-2.992-7.523-.43-15.918%205.692-20.582l-15.914%206.332c-8.973%203.57-13.391%2013.836-9.82%2022.809l93.613%20235.21c3.57%208.973%2013.835%2013.391%2022.808%209.821l14.266-5.676c-6.996-.015-13.66-4.238-16.41-11.144zm0%200%22%20data-original%3D%22%2332b1cc%22%2F%3E%3Cpath%20fill%3D%22%23d7f7ff%22%20d%3D%22m135.398%20231.938%20174.024-69.266%2037.879%2095.172-174.024%2069.265zm0%200%22%20data-original%3D%22%23d7f7ff%22%2F%3E%3Cpath%20fill%3D%22%23b7e9f9%22%20d%3D%22m155.645%20223.887-20.247%208.054%2037.88%2095.172%2020.245-8.058zm0%200%22%20data-original%3D%22%23b7e9f9%22%2F%3E%3Cpath%20fill%3D%22%23b7e9f9%22%20d%3D%22m154.34%20279.523%20174.023-69.265%2018.942%2047.586-174.028%2069.265zm0%200%22%20data-original%3D%22%23b7e9f9%22%2F%3E%3Cpath%20fill%3D%22%2387cee9%22%20d%3D%22m173.277%20327.113%2019.43-7.734.816-.324-18.941-47.586-20.242%208.058zm0%200%22%20data-original%3D%22%2387cee9%22%2F%3E%3Cpath%20d%3D%22m382.96%20400.934-35.855-34.606%2021.165-8.426c12.84-5.109%2019.125-19.71%2014.015-32.55l-6.308-15.852a7.497%207.497%200%200%200-9.743-4.195%207.5%207.5%200%200%200-4.195%209.742l6.309%2015.851c2.054%205.157-.473%2011.016-5.625%2013.067-16.524%206.578-123.996%2049.351-141.399%2056.277-5.152%202.051-11.015-.472-13.066-5.625-.535-1.344-12.57-31.586-25.094-63.05l160.09-63.715%205.832%2014.644a7.494%207.494%200%200%200%209.742%204.195%207.5%207.5%200%200%200%204.195-9.742L288.672%2090.145c-5.11-12.836-19.715-19.125-32.55-14.02l-21.165%208.426%202.27-49.781c1.101-24.102-23.07-41.297-45.473-32.38l-54.55%2021.712H53.48c-24.132%200-40.195%2024.933-30.273%2046.898l20.52%2045.414H25.559C11.742%20116.414.5%20127.656.5%20141.473v253.156c0%2013.816%2011.242%2025.058%2025.059%2025.058h18.168l-20.52%2045.415C13.273%20487.094%2029.383%20512%2053.484%20512h28.36a7.5%207.5%200%201%200%200-15h-28.36c-13.254%200-22.07-13.629-16.605-25.723l23.308-51.59h78.32l23.305%2051.59c5.461%2012.078-3.328%2025.723-16.601%2025.723h-28.363a7.497%207.497%200%200%200-7.5%207.5%207.5%207.5%200%200%200%207.5%207.5h28.363c24.133%200%2040.2-24.934%2030.273-46.898l-20.515-45.414h22.777c9.008%200%2016.918-4.782%2021.336-11.934%204.75%205.207%2011.516%208.203%2018.555%208.203%205.988%200%207.988-1.281%2026.113-8.496l-2.273%2049.781c-1.098%2024.106%2023.074%2041.297%2045.472%2032.38l85.227-33.923c22.426-8.922%2028.129-38.027%2010.785-54.765zm-45.253-147.02-160.09%2063.715c-.515-1.3%201.86%204.668-13.394-33.649l160.09-63.718zm-18.937-47.59-160.09%2063.719c-5.492-13.793-7.903-19.848-13.395-33.648l160.09-63.72zM261.668%2090.063c5.129-2.043%2011.023.496%2013.066%205.628l25.094%2063.047-160.09%2063.719-25.093-63.05c-2.04-5.118.488-11.02%205.625-13.067zm-149.59-39.817c8.988-3.578%2077.535-30.86%2085.227-33.918%2012.312-4.902%2025.543%204.496%2024.937%2017.758l-2.578%2056.55-72.766%2028.962-1.12-1.082c-.005%200-.008-.004-.012-.008l-39.602-38.223c-9.539-9.203-6.418-25.129%205.914-30.039zm-75.2%2014.578c-5.456-12.078%203.333-25.722%2016.606-25.722h47.555c-18.066%2011.46-20.875%2036.937-5.293%2051.976l26.25%2025.336H60.188zM15.5%20141.473c0-5.547%204.512-10.059%2010.059-10.059h91.652c-3.07%201.223-9.07%203.137-13.832%2010.04-4.727%206.866-5.79%2015.671-2.672%2023.5l17.664%2044.382H15.5zm0%2082.863h108.84l14.414%2036.215H15.5zm0%2051.215h129.223l14.414%2036.215H15.5zm172.305%20119.078c0%205.547-4.512%2010.059-10.059%2010.059H25.56c-5.547%200-10.059-4.512-10.059-10.06V326.77h149.61l22.695%2057.023zm178.824%2047.137-85.227%2033.918c-12.312%204.902-25.543-4.5-24.937-17.758l2.578-56.551c4.254-1.691%2068.687-27.336%2072.77-28.96l40.73%2039.312c9.539%209.203%206.418%2025.128-5.914%2030.039zm0%200%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fsvg%3E')
  }
  .soup {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20width%3D%22512%22%20height%3D%22512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20viewBox%3D%220%200%20682.667%20682.667%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%20clipPathUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M0%20512h512V0H0Z%22%20data-original%3D%22%23000000%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg%20clip-path%3D%22url(%23a)%22%20transform%3D%22matrix(1.33333%200%200%20-1.33333%200%20682.667)%22%3E%3Cpath%20fill%3D%22%23c2ae8d%22%20d%3D%22M0%200v-11.165c0-15.864-9.289-30.231-23.726-36.806-17.006-7.745-43.621-15.67-81.331-15.67s-64.325%207.925-81.332%2015.67c-14.437%206.575-23.725%2020.942-23.725%2036.806V0Z%22%20data-original%3D%22%238db9c2%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(361.057%2071.14)%22%2F%3E%3Cpath%20fill%3D%22%23eff3f5%22%20d%3D%22M0%200c0-122.737-99.499-222.235-222.236-222.235S-444.472-122.737-444.472%200z%22%20data-original%3D%22%23eff3f5%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(478.236%20266.102)%22%2F%3E%3Cpath%20fill%3D%22%23e7d7c9%22%20d%3D%22M0%200c0-112.106-83.014-204.809-190.92-220.029a223.976%20223.976%200%200%201%2031.315-2.206C-36.868-222.235%2062.63-122.737%2062.63%200z%22%20data-original%3D%22%23c9e2e7%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(415.606%20266.102)%22%2F%3E%3Cpath%20fill%3D%22%23c2ae8d%22%20d%3D%22M0%200c0-61.368-99.499-111.118-222.236-111.118S-444.472-61.368-444.472%200c0%2061.369%2099.499%20111.118%20222.236%20111.118S0%2061.369%200%200%22%20data-original%3D%22%238db9c2%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(478.236%20266.102)%22%2F%3E%3Cpath%20fill%3D%22%23e7d7c9%22%20d%3D%22M0%200c-53.955%200-106.292%2010.696-143.592%2029.346-30.268%2015.134-48.339%2034.374-48.339%2051.467%200%2017.092%2018.071%2036.332%2048.339%2051.466%2037.3%2018.65%2089.637%2029.347%20143.592%2029.347%2053.955%200%20106.292-10.697%20143.592-29.347%2030.268-15.134%2048.339-34.374%2048.339-51.466%200-17.093-18.071-36.333-48.339-51.467C106.292%2010.696%2053.955%200%200%200%22%20data-original%3D%22%23c9e2e7%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(256%20185.29)%22%2F%3E%3Cpath%20fill%3D%22%23fdcb82%22%20d%3D%22M0%200c8.128-7.837%2019.201-15.412%2032.714-22.169%2037.3-18.649%2089.637-29.346%20143.592-29.346%2053.954%200%20106.291%2010.697%20143.591%2029.346C333.41-15.412%20344.483-7.837%20352.611%200c-2.879%2015.752-18.885%2032.758-44.05%2046.419C274.206%2065.069%20226%2075.766%20176.306%2075.766c-49.695%200-97.9-10.697-132.256-29.347C18.885%2032.758%202.879%2015.752%200%200%22%20data-original%3D%22%23fdcb82%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(79.694%20236.804)%22%2F%3E%3Cpath%20fill%3D%22%23fcb143%22%20d%3D%22M0%200c-8.792-7.415-19.83-14.546-32.799-21.031-43.548-21.774-104.651-34.261-167.643-34.261-36.04%200-71.456%204.095-103.327%2011.671%2036.625-16.394%2085.55-25.707%20135.889-25.707%2053.954%200%20106.291%2010.696%20143.591%2029.346C-10.776-33.226.297-25.65%208.425-17.813%207.357-11.97%204.479-5.954%200%200%22%20data-original%3D%22%23fcb143%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(423.88%20254.617)%22%2F%3E%3Cpath%20fill%3D%22%23fc8086%22%20d%3D%22M0%200c-3.006-17.031-23.624-25.254-51.519-25.254S-107.225-16.142-101.017%200c5.051%2013.132%2026.991%2010.629%2053.539%2019.193C-16.163%2029.295%203.03%2017.173%200%200%22%20data-original%3D%22%23fc8086%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(236.807%20256)%22%2F%3E%3Cpath%20fill%3D%22%23fb636f%22%20d%3D%22M0%200c.323-2.003.306-4.123-.083-6.33-3.006-17.031-23.624-25.254-51.519-25.254-15.259%200-30.481%202.732-40.135%207.846-.211-13.465%2025.043-20.978%2050.37-20.978%2027.895%200%2048.513%208.223%2051.518%2025.254C11.622-11.127%207.845-3.991%200%200%22%20data-original%3D%22%23fb636f%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(226.656%20275.462)%22%2F%3E%3Cpath%20fill%3D%22%237fd061%22%20d%3D%22M0%200c0-7.252-9.045-13.132-20.203-13.132S-40.406-7.252-40.406%200c0%207.253%209.045%2013.133%2020.203%2013.133S0%207.253%200%200%22%20data-original%3D%22%237fd061%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(324.69%20267.111)%22%2F%3E%3Cpath%20fill%3D%22%237fd061%22%20d%3D%22M0%200c0-7.253-9.045-13.133-20.204-13.133-11.157%200-20.203%205.88-20.203%2013.133%200%207.252%209.046%2013.132%2020.203%2013.132C-9.045%2013.132%200%207.252%200%200%22%20data-original%3D%22%237fd061%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(388.332%20247.919)%22%2F%3E%3Cpath%20fill%3D%22%237fd061%22%20d%3D%22M0%200c0-7.253-9.045-13.132-20.203-13.132S-40.406-7.253-40.406%200s9.045%2013.132%2020.203%2013.132S0%207.253%200%200%22%20data-original%3D%22%237fd061%22%20style%3D%22fill-opacity%3A1%3Bfill-rule%3Anonzero%3Bstroke%3Anone%22%20transform%3D%22translate(293.376%20223.675)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c0-122.737-99.499-222.235-222.236-222.235S-444.472-122.737-444.472%200%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(478.236%20266.102)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c-50.777%2020.364-83.287%2051.646-83.287%2086.726%200%2061.369%2099.499%20111.118%20222.236%20111.118%2033.44%200%2065.155-3.694%2093.603-10.308%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(117.05%20179.376)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c57.342-20.095%2094.832-53.387%2094.832-91.057%200-61.368-99.499-111.118-222.236-111.118-38.162%200-74.077%204.81-105.454%2013.282%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(383.404%20357.158)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c36.818%2016.915%2086.554%2026.545%20137.746%2026.545%2053.955%200%20106.292-10.697%20143.592-29.347%2030.268-15.135%2048.339-34.374%2048.339-51.467%200-17.092-18.071-36.332-48.339-51.466-37.3-18.65-89.637-29.346-143.592-29.346-53.954%200-106.291%2010.696-143.592%2029.346-30.268%2015.134-48.339%2034.374-48.339%2051.466%200%2011.819%208.64%2024.665%2023.977%2036.468%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(118.254%20320.37)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c-2.879%2015.752-18.885%2032.758-44.05%2046.419-34.356%2018.65-82.561%2029.347-132.256%2029.347-49.694%200-97.9-10.697-132.255-29.347-25.165-13.661-41.171-30.667-44.05-46.419%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(432.306%20236.804)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200v-10.154C0-26.019-9.289-40.386-23.726-46.96c-17.006-7.745-43.621-15.67-81.331-15.67s-64.325%207.925-81.332%2015.67c-14.437%206.574-23.725%2020.941-23.725%2036.806V0%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(361.057%2070.13)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c-3.006-17.031-23.624-25.254-51.519-25.254S-107.225-16.142-101.017%200c5.051%2013.132%2026.991%2010.629%2053.539%2019.193C-16.163%2029.295%203.03%2017.173%200%200Z%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(236.807%20256)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200s9.092%204.041%2013.132%2011.112%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(237.817%20261.05)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c0-7.252-9.045-13.132-20.203-13.132S-40.406-7.252-40.406%200c0%207.253%209.045%2013.133%2020.203%2013.133S0%207.253%200%200Z%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(324.69%20267.111)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c0-7.253-9.045-13.133-20.204-13.133-11.157%200-20.203%205.88-20.203%2013.133%200%207.252%209.046%2013.132%2020.203%2013.132C-9.045%2013.132%200%207.252%200%200Z%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(388.332%20247.919)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c0-7.253-9.045-13.132-20.203-13.132S-40.406-7.253-40.406%200s9.045%2013.132%2020.203%2013.132S0%207.253%200%200Z%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(293.376%20223.675)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c0-12.626-8.081-12.626-8.081-25.251C-8.081-37.878%200-37.878%200-50.504%200-63.132-8.081-63.132-8.081-75.76-8.081-88.389%200-88.389%200-101.017%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(260.04%20504.5)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c0-12.627%208.082-12.627%208.082-25.253C8.082-37.881%200-37.881%200-50.509c0-12.629%208.082-12.629%208.082-25.257%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(307.518%20479.249)%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%2215%22%20d%3D%22M0%200c0-12.627%208.082-12.627%208.082-25.253C8.082-37.881%200-37.881%200-50.509c0-12.629%208.082-12.629%208.082-25.257%22%20data-original%3D%22%23000000%22%20style%3D%22stroke-width%3A15%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(195.39%20479.249)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }
  .drink {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20width%3D%22512%22%20height%3D%22512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23ebf7fe%22%20d%3D%22M44%2056V39.83a11.693%2011.693%200%200%200%201.551.161A12.155%2012.155%200%200%200%2048%2039.834V56z%22%20data-original%3D%22%23ebf7fe%22%2F%3E%3Cpath%20fill%3D%22%23c7e2fc%22%20d%3D%22M57.961%2028.987Q58%2028.5%2058%2028a11.882%2011.882%200%200%200-.785-4.262A36.791%2036.791%200%200%201%2055%2010.575V8H37v2.573a44.605%2044.605%200%200%201-2.42%2013.745%2011.952%2011.952%200%200%200-.568%204.212c.007.157.017.314.03.47h.994a35.426%2035.426%200%200%200%209.737-1.364A16.547%2016.547%200%200%201%2049.317%2027a16.539%2016.539%200%200%201%205.23.849z%22%20data-original%3D%22%23c7e2fc%22%2F%3E%3Cpath%20fill%3D%22%23ef8b04%22%20d%3D%22m58%2029-3.454-1.151A16.539%2016.539%200%200%200%2049.317%2027a16.547%2016.547%200%200%200-4.543.636A35.426%2035.426%200%200%201%2035.037%2029H34h.041a12%2012%200%200%200%2023.919%200z%22%20data-original%3D%22%23855b57%22%2F%3E%3Cpath%20fill%3D%22%23e3730f%22%20d%3D%22M14%2012v4a10%2010%200%200%201-4%208%2010%2010%200%200%200-4%208v26a4%204%200%200%200%204%204h16a4%204%200%200%200%204-4V32a10%2010%200%200%200-4-8%2010%2010%200%200%201-4-8v-4%22%20data-original%3D%22%23243242%22%2F%3E%3Cpath%20fill%3D%22%23a95c17%22%20d%3D%22M20.62%2034.225A31.082%2031.082%200%200%200%2014%2015.013V16a10%2010%200%200%201-4%208%2010%2010%200%200%200-4%208v26a3.985%203.985%200%200%200%20.679%202.229A31.193%2031.193%200%200%200%2020.62%2034.225z%22%20data-original%3D%22%234d5d7a%22%2F%3E%3Cpath%20fill%3D%22%23f2c351%22%20d%3D%22M10%2032h16v22H10z%22%20data-original%3D%22%23f2c351%22%2F%3E%3Cpath%20fill%3D%22%23f7d881%22%20d%3D%22M10%2054h3.558a31.1%2031.1%200%200%200%207.062-19.775c0-.749-.036-1.489-.088-2.225H10z%22%20data-original%3D%22%23f7d881%22%2F%3E%3Cpath%20fill%3D%22%23f2c351%22%20d%3D%22M14%208h8v4h-8z%22%20data-original%3D%22%23f2c351%22%2F%3E%3Crect%20width%3D%2210%22%20height%3D%226%22%20x%3D%2213%22%20y%3D%222%22%20fill%3D%22%23322413%22%20data-original%3D%22%23bc7f35%22%20rx%3D%221%22%2F%3E%3Cpath%20fill%3D%22%23c7e2fc%22%20d%3D%22m33.999%2062%2010.002-6h4l9.998%206z%22%20data-original%3D%22%23c7e2fc%22%2F%3E%3Ccircle%20cx%3D%2218%22%20cy%3D%2243%22%20r%3D%224%22%20fill%3D%22%23c16b3f%22%20data-original%3D%22%23c16b3f%22%2F%3E%3Cpath%20fill%3D%22%23e39854%22%20d%3D%22M18%2039a4%204%200%200%200-.11%207.989%2030.928%2030.928%200%200%200%202.253-7.356A3.966%203.966%200%200%200%2018%2039z%22%20data-original%3D%22%23e39854%22%2F%3E%3Cpath%20fill%3D%22%23fa9b01%22%20d%3D%22M42.749%2039.53a38.976%2038.976%200%200%200%205.907-12.507%2016.575%2016.575%200%200%200-3.882.613A35.426%2035.426%200%200%201%2035.037%2029h-.994a12.143%2012.143%200%200%200%208.706%2010.53zM34.001%2029h.042l-.001-.003z%22%20data-original%3D%22%23b17e74%22%2F%3E%3Cpath%20fill%3D%22%23ebf7fe%22%20d%3D%22M37%2010.573a44.605%2044.605%200%200%201-2.42%2013.745%2011.952%2011.952%200%200%200-.568%204.212c.007.157.017.314.03.47h.994a35.426%2035.426%200%200%200%209.737-1.364%2016.575%2016.575%200%200%201%203.882-.613A39.117%2039.117%200%200%200%2048.984%208H37z%22%20data-original%3D%22%23ebf7fe%22%2F%3E%3Cpath%20d%3D%22M26.6%2023.2A9.043%209.043%200%200%201%2023%2016V8.721A1.993%201.993%200%200%200%2024%207V3a2%202%200%200%200-2-2h-8a2%202%200%200%200-2%202v4a1.993%201.993%200%200%200%201%201.722V16a9.041%209.041%200%200%201-3.6%207.2A11.058%2011.058%200%200%200%205%2032v26a5.006%205.006%200%200%200%205%205h16a5.006%205.006%200%200%200%205-5V32a11.052%2011.052%200%200%200-4.4-8.8zM21%2011h-6V9h6zm-7-8h8v4h-8zm15%2055a3%203%200%200%201-3%203H10a3%203%200%200%201-3-3V32a9.046%209.046%200%200%201%203.6-7.2A11.049%2011.049%200%200%200%2015%2016v-3h6v3a11.055%2011.055%200%200%200%204.4%208.8A9.044%209.044%200%200%201%2029%2032zm29.511%203.142L49%2055.433V40.64a12.982%2012.982%200%200%200%209.149-17.261A35.814%2035.814%200%200%201%2056%2010.575V8a1%201%200%200%200-1-1H37a1%201%200%200%200-1%201v2.572a43.411%2043.411%200%200%201-2.372%2013.437%2012.916%2012.916%200%200%200-.617%204.564A13.072%2013.072%200%200%200%2043%2040.645v14.788l-9.518%205.709A1%201%200%200%200%2034%2063h24a1%201%200%200%200%20.515-1.857zM38%2010.572V9h16v1.575a37.785%2037.785%200%200%200%202.28%2013.519%2010.873%2010.873%200%200%201%20.7%203.513l-2.119-.707a17.632%2017.632%200%200%200-10.361-.226A34.4%2034.4%200%200%201%2035.035%2028h-.025a10.9%2010.9%200%200%201%20.519-3.373A45.364%2045.364%200%200%200%2038%2010.572zm-2.807%2019.422a36.479%2036.479%200%200%200%209.854-1.4%2015.606%2015.606%200%200%201%209.182.2l2.632.877a10.978%2010.978%200%200%201-11.274%209.318%2011.05%2011.05%200%200%201-10.394-8.995zm10.321%2011c.164.006.327.009.491.009.334%200%20.665-.023.995-.048V55h-2V40.947c.171.013.34.037.514.044zM37.608%2061l6.668-4h3.447l6.664%204z%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M10%2031a1%201%200%200%200-1%201v22a1%201%200%200%200%201%201h16a1%201%200%200%200%201-1V32a1%201%200%200%200-1-1zm15%2022H11V33h14z%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M18%2048a5%205%200%201%200-5-5%205%205%200%200%200%205%205zm0-8a3%203%200%201%201-3%203%203%203%200%200%201%203-3z%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fsvg%3E");
  }
</style>