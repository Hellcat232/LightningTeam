import './DeleteWaterModal.module.css'

export default function DeleteWaterModal(props) {
    
    if (!props.call) {
        return null;
    }

    
    return (
        
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
                <button className="close" onClick={props.onClose} >×</button>
                <h2>Delete entry</h2>
                <p>Are you sure you want to delete the entry?</p>
                <div className='btn'>
                    <button className="accept" type="button" >Delete</button>
                    <button className="reject" type="button" >Cancel</button> 
                </div>    
            </div>
        </div>
        
    )
}