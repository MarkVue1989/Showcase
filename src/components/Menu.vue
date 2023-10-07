<template>
    <header>
        <div class="icon__menu">
        </div>
    </header>
    <div :class="{ 'menu__side': showMenu, 'hide': !showMenu }">
        <div class="name__page">
            <i @click="setShowMenu()" class="pi pi-bars" />
            <h4 v-if="showMenu">Marc Vázquez</h4>
        </div>
        <div class="options__menu">
            <ul>
                <template v-for="(item, index) in menu" :key="item.title">
                    <li v-if="item.subMenu === undefined">
                        <div class="option" @click="setSelectedMenu(index)">
                            <i :class="item.icon" :title="item.title"></i>
                            <h4 :class="{ 'selected': selectedMenu[index] }" v-if="showMenu">{{ item.description }}</h4>
                        </div>
                    </li>
                    <li v-else>
                        <div class="option" @click="setSelectedMenu(index)">
                            <i :class="item.icon" :title="item.title"></i>
                            <h4 :class="{ 'selected': selectedMenu[index] }" v-if="showMenu">
                                {{ item.description }}
                                <span v-if="!selectedMenu[index]">▲</span>
                                <span v-else>▼</span>
                            </h4>
                        </div>
                        <ul v-if="selectedMenu[index] && item.subMenu !== undefined">
                            <template v-for="(subItem, subIndex) in item.subMenu" :key="subItem.title">
                                <li>
                                    <div class="subOption" @click="setSelectedMenu(index)">
                                        <h4 :class="{ 'selected': selectedMenu[index] }" v-if="showMenu">{{
                                            subItem.description
                                        }}</h4>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </li>
                </template>
            </ul>
        </div>
    </div>
    <div class="content">
        <router-view />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
const showMenu = ref(true)
type MenuElement = {
    title: string,
    description: string,
    icon?: string,
    subMenu?: MenuElement[]
}
const menu: MenuElement[] = [
    {
        title: "Inicio",
        description: "Inicio",
        icon: "pi pi-home"
    },
    {
        title: "Quien soy?",
        description: "Quien soy?",
        icon: "pi pi-user"
    },
    {
        title: "Partes Web",
        description: "Partes Web",
        icon: "pi pi-arrows-alt",
        subMenu: [
            {
                title: "Topbar",
                description: "Topbar",
            },
            {
                title: "Footer",
                description: "Footer",
            },
            {
                title: "Menu lateral",
                description: "Menu lateral",
            },
        ]
    },
    {
        title: "Widgets",
        description: "Widgets",
        icon: "pi pi-cog"
    },
    {
        title: "Components",
        description: "Components",
        icon: "pi pi-sync"
    },
]

const selectedMenu = ref<boolean[]>([])
const selectedSubMenu = ref<{ menu: number, subElements: boolean[] }[]>([])

onMounted(() => {
    for (let x = 0; x < menu.length; x++) {
        selectedMenu.value[x] = false
        if (menu[x].subMenu !== undefined) {
            selectedSubMenu.value[x] = {
                menu: x,
                subElements: []
            }
            for (let y = 0; y < menu[x].subMenu!.length; y++) {
                selectedSubMenu.value[x].subElements[y] = false
            }
        }
    }
})

const setShowMenu = (b?: boolean) => {
    if (b !== undefined) {
        showMenu.value = b
    }
    else {
        showMenu.value = !showMenu.value
    }
}

const setSelectedMenu = (index: number, b?: boolean) => {
    //clearSelectedMenu()
    if (b !== undefined) {
        selectedMenu.value[index] = b
    }
    else {
        selectedMenu.value[index] = !selectedMenu.value[index]
    }
}

const clearSelectedMenu = () => {
    for (let x = 0; x < menu.length; x++) {
        selectedMenu.value[x] = false
        if (menu[x].subMenu !== undefined) {
            selectedSubMenu.value[x] = {
                menu: x,
                subElements: []
            }
            for (let y = 0; y < menu[x].subMenu!.length; y++) {
                selectedSubMenu.value[x].subElements[y] = false
            }
        }
    }
}

const setSelectedSubMenu = (index: number, subIndex: number, b?: boolean) => {
    clearSelectedSubMenu(index)
    selectedSubMenu.value[index].subElements[subIndex]
}

const clearSelectedSubMenu = (index: number) => {
    for (let y = 0; y < menu[index].subMenu!.length; y++) {
        selectedSubMenu.value[index].subElements[y] = false
    }
}
</script>
<style lang="css" scoped>
header {
    padding: 1.5rem;
    background-color: #1B7161;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 200;
    width: 100%;
}

.icon__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(10px);
}

.icon__menu i {
    font-size: 1rem;
    cursor: pointer;
    position: absolute;
    color: white;
}

.menu__side {
    width: 15rem;
    height: 100vh;
    background-color: #1B7161;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    font-size: 1.2rem;
    z-index: 300;
}

.hide {
    width: 5rem;
    height: 100vh;
    background-color: #1B7161;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    font-size: 1.4rem;
    z-index: 300;
}

.name__page {
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
}

.name__page i {
    margin-right: 1rem;
}

.options__menu {
    padding: 1rem 1.5rem;
    position: absolute;
}

.options__menu h4 {
    color: #F0f0f0b2;
    cursor: default;
    display: block;
    position: relative;
}

.options__menu h4:hover {
    color: white;
    transition: color 300ms;
}

.options__menu ul {
    list-style: none;
}

.options__menu .option {
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    position: relative;
}

.options__menu .option h4 {
    padding-left: 1rem;
    font-weight: 300;
    cursor: pointer;
}

div .option h4.selected {
    color: #fff;
}

.subOption {
    margin-left: 2.5rem;
    position: relative;
}

.content {
    padding-top: 3rem;
    padding-left: 15rem;
}
</style>