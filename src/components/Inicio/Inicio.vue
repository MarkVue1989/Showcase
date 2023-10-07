<template>
    <div class="main">
        <div class="column1">
            <div class="row">
                <div class="texto">
                    <h4>Seccion de bienvenida:</h4>
                    <p>
                        ¡Bienvenido a mipágina de currículum en línea! Soy un desarrollador web apasionado por la tecnología
                        en
                        la creación de soluciones web. Mi objetivo es solventar los problemas de mis clientes y contribuir
                        al
                        éxito de proyectos emocionantes.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="texto">
                    <h4>Resumen profesional:</h4>
                    <p>
                        Con casi 6 años de experiencia en desarrollo web, he trabajado en una variaded de proyectos, me he
                        centrado en trabajar para hacer aplicaciones para agilizar el trabajo de las empresas. Mi enfoque
                        esta
                        siempre centrado en el cliente y la programación eficiente me ha permitido crear soluciones no solo
                        funcionales sino también faciles de manejar.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="texto">
                    <h4>Ética laboral y enfoque de trabajo:</h4>
                    <p>
                        Me considero un profesional comprometido con la excelencia y la integridad en todo lo que
                        desarrollo.
                        Valoro la transparencia, la colaboración y la responsabilidad en mi trabajo. Siempre busco superar
                        las
                        expectativas y entregar resultados de alta calidad. Mi enfoque se basa en la adaptabilidad y la
                        busqueda
                        constante de aprendizaje, lo que me permite abordar desafíos con un espirítu positivo y
                        constructivo. Mi
                        objetivo es no solo alcanzar el éxito personal, sino también contribuir al crecimiento y el éxito de
                        mi
                        equipo y organización a través de mis valores y mi trabajo.
                    </p>
                </div>
            </div>
        </div>
        <div class="column2">
            <div class="row">
                <figure>
                    <img src="../../assets/img/Example.jpg" alt="Marc Vázquez">
                </figure>
            </div>
            <div class="row">
                <h4>Listado de competencias:</h4>
                <ul>
                    <li>HTML5</li>
                    <li>CSS/SCSS</li>
                    <li>Javascript/Typescript</li>
                    <li>VUE</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="css" scoped>
.main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10vw;
}

.column1 {
    padding-left: 2.5vw;
    padding-top: 2.5vw;
    display: grid;
    align-items: center;

}

.column2 {
    padding-top: 2.5vw;
    display: grid;
    align-items: center;
    grid-row-gap: 5vh;
}

h4 {
    font-weight: bold;
    font-size: 1.3rem;
}

p {
    font-size: 1.1em;
}

.texto {
    padding: 2rem;
    border: 1px solid;
    border-radius: 30px;
}

li {
    list-style: none;
    padding-left: 1vw;
}

li:first-child {
    padding-top: 1vh;
}
</style>