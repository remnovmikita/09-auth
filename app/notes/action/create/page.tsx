import NoteForm from "@/components/NoteForm/NoteForm";
import css from "@/components/CreateNote/Create.module.css"

export default function createPage(){
    return(
           <main className={css.main}>
        <div className={css.container}>
            <h1 className={css.title}>Create note</h1>
	        {<NoteForm />}
        </div>
        </main>
    )
}