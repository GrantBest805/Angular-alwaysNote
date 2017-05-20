export class Note {
    constructor(
        public id: number = Math.floor(Math.random()*500),
        public note: String = "",
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date(),
        public edit: Boolean = false
    ){ }
}
