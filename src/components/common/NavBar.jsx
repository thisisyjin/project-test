<div className="show_media" style={{display: imageUrl ? 'grid':'none'}}>
<div id="file_media">
    <img id="preview" src={''} alt="imageURL" />
    <span onClick={handleImageDelete}>&times;</span>
    </div>
</div>


<form className="message-input" onSubmit={handleSubmit} >
<input type="text" placeholder="Enter your Message" value={text} onChange={(e)=>setText(e.target.value)} />

<div className="file_upload">
    <i className="fas fa-image text-danger"></i>
    <input type="file" name="file" id="file" accept="image/*" onChange={handleImage}/>
</div>

<button type="submit" className="material-icons" disabled={text || imageUrl? false : true}> 
    near_me
</button>
</form>