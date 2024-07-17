<template>
    <h1     :data-aos="!isMobile ? 'fade-down' : ''"
    class="heading">
        {{ heading }}
        <transition name="fadeText">
            <p class="heading__span" ref="myParagraph" v-show="showChars > 0">
                {{ typedString }}
            <div class="red"></div>
            <div class="blue"></div>
            </p>
        </transition>
    </h1>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const heading = ref('Начните свой путь к самосовершенствованию')
const lastWords = ref('прямо сейчас!')
const showChars = ref(null)
const isWorks = ref(false)
const myParagraph = ref(null);
const typedString = computed(() => {
    return lastWords.value.slice(0, showChars.value);
})
const handleScroll = () => {
    if (myParagraph.value) {
        const rect = myParagraph.value.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 511 && !isWorks.value) {
            myParagraph.value.classList.add('fadeIn');
            isWorks.value = true
        }
    }
}
const showCharsIter = () => {
    const intervalID = setInterval(() => {
        if (++showChars.value === lastWords.value.length) {
            clearInterval(intervalID);
        }
    }, 150);

}
onMounted(() => {
    if (isWorks) {
        setTimeout(() => {
            showCharsIter()
        }, 1000)
    }
    window.addEventListener('scroll', () => {
        handleScroll()
    });
})

</script>

