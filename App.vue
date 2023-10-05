<template>
    <Navbar @setSearch="searchValue = $event" />

    <Notes :notes="filterNotes" @delNote="delNote" @change="change" />

    <Modal v-show="isModalOpen" @close="isModalOpen = false" @addNote="addNote" :edit="edit" :editedNote="editedNote"
        @changedNote="changedNote" />

    <button class="addNote" @click="isModalOpen = true, edit = false" v-show="!isModalOpen">
        <img src="@/assets/img/pens.svg" alt="pens">
    </button>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Notes from './components/Notes.vue';
import Modal from './components/Modal.vue';



export default {
    components: {
        Navbar,
        Notes,
        Modal
    },
    data() {
        return {
            notes: [],
            isModalOpen: false,
            edit: false,
            editedNote: null,
            searchValue: ''
        }
    },
    methods: {
        addNote(note) {
            this.notes.push(note)
        },
        getNotes() {
            let localNotes = localStorage.notes

            if (localNotes) {

                this.notes = JSON.parse(localNotes)
            }
        },

        delNote(id) {

            this.notes.splice(id, 1)
        },
        change(id) {
            this.isModalOpen = this.edit = true
            let currentNote = this.notes.find(note => note.id == id)
            this.editedNote = currentNote
        },
        changedNote(newNote) {
            this.notes.forEach(note => {
                if (note.id == newNote.id) {
                    note.title = newNote.title
                    note.text = newNote.text
                    note.date = newNote.date
                }
            })
        }
    },
    watch: {
        notes: {

            handler() {
                localStorage.notes = JSON.stringify(this.notes)
            },
            deep: true
        }
    },
    mounted() {
        this.getNotes()
    },
    computed: {
        filterNotes() {
            return this.searchValue ?
                this.notes.filter(note => note.title.toLowerCase().includes(this.searchValue.toLowerCase())) : this.notes
        }
    }
}
</script>

