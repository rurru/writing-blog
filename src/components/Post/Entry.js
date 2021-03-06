import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class Entry extends Component {
    render () {
        return (
            <div class = "entry">
                <Editor
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={this.handleEditorChange}
                />
            </div>
        )}
}

export default Entry;