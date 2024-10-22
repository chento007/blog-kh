"use client";

import { useEffect, useRef, useState } from 'react';
import LoadingSpinner from "@/components/Card/Loading";

export default function EditorWriting() {
    const [editorLoaded, setEditorLoaded] = useState(false);

    const editorRef = useRef<any>({});
    const [editorData, setEditorData] = useState('<p>Type here...</p>');

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            DecoupledEditor: require("@ckeditor/ckeditor5-build-decoupled-document"),
        };
        setEditorLoaded(true);
    }, []);

    return (
        <div className="w-full border-1 m-auto my-5">
            {editorLoaded ? (
                <editorRef.current.CKEditor
                    config={{
                        autoGrow_onStartup: true,
                        autoGrow_minHeight: 200,
                        autoGrow_maxHeight: 600,
                        mediaEmbed: {
                            previewsInData: true,
                        },
                    }}
                    editor={editorRef.current.DecoupledEditor}
                    data={editorData}
                    onChange={(event: any, editor: any) => {
                        const data = editor.getData();
                        setEditorData(data); // Update state with editor data
                        console.log("Editor data: ", data);
                    }}
                    onReady={(editor: any) => {
                        editor.ui
                            .getEditableElement()
                            .parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    }}
                />
            ) : (
                <LoadingSpinner/>
            )}
        </div>
    );
}
