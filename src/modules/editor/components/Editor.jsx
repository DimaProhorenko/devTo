/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
// import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Code from "@tiptap/extension-code";
import Image from "@tiptap/extension-image";
import { Heading } from "../extensions/Heading";
import Toolbar from "./Toolbar";
import { Card } from "src/modules/common/components";

const extensions = [
  Document,
  Heading.configure({
    levels: [1, 2, 3],
  }),
  Paragraph,
  Text,
  Italic,
  Bold,
  BulletList,
  ListItem,
  Code,
  Image,
];

const content = "";

const Editor = ({ cb }) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose md:prose-lg lg:prose-xl prose-code:bg-stone-200 ",
      },
    },
    extensions,
    content,
    onUpdate({ editor }) {
      cb(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Card padding={false}>
      <Card.Header>
        <Toolbar editor={editor} />
      </Card.Header>
      <Card.Body>
        <EditorContent className="p-2" editor={editor} />
      </Card.Body>
    </Card>
  );
};

Editor.propTypes = {
  cb: PropTypes.func,
};

export default Editor;

// import { Color } from "@tiptap/extension-color";
// import ListItem from "@tiptap/extension-list-item";
// import TextStyle from "@tiptap/extension-text-style";
// import { EditorProvider, useCurrentEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import React from "react";

// const MenuBar = () => {
//   const { editor } = useCurrentEditor();

//   if (!editor) {
//     return null;
//   }

//   return (
//     <>
//       <button
//         onClick={() => editor.chain().focus().toggleBold().run()}
//         disabled={!editor.can().chain().focus().toggleBold().run()}
//         className={editor.isActive("bold") ? "is-active" : ""}
//       >
//         bold
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleItalic().run()}
//         disabled={!editor.can().chain().focus().toggleItalic().run()}
//         className={editor.isActive("italic") ? "is-active" : ""}
//       >
//         italic
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleStrike().run()}
//         disabled={!editor.can().chain().focus().toggleStrike().run()}
//         className={editor.isActive("strike") ? "is-active" : ""}
//       >
//         strike
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleCode().run()}
//         disabled={!editor.can().chain().focus().toggleCode().run()}
//         className={editor.isActive("code") ? "is-active" : ""}
//       >
//         code
//       </button>
//       <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
//         clear marks
//       </button>
//       <button onClick={() => editor.chain().focus().clearNodes().run()}>
//         clear nodes
//       </button>
//       <button
//         onClick={() => editor.chain().focus().setParagraph().run()}
//         className={editor.isActive("paragraph") ? "is-active" : ""}
//       >
//         paragraph
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//         className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
//       >
//         h1
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//         className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
//       >
//         h2
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//         className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
//       >
//         h3
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
//         className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
//       >
//         h4
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
//         className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
//       >
//         h5
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
//         className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
//       >
//         h6
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleBulletList().run()}
//         className={editor.isActive("bulletList") ? "is-active" : ""}
//       >
//         bullet list
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleOrderedList().run()}
//         className={editor.isActive("orderedList") ? "is-active" : ""}
//       >
//         ordered list
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//         className={editor.isActive("codeBlock") ? "is-active" : ""}
//       >
//         code block
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleBlockquote().run()}
//         className={editor.isActive("blockquote") ? "is-active" : ""}
//       >
//         blockquote
//       </button>
//       <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
//         horizontal rule
//       </button>
//       <button onClick={() => editor.chain().focus().setHardBreak().run()}>
//         hard break
//       </button>
//       <button
//         onClick={() => editor.chain().focus().undo().run()}
//         disabled={!editor.can().chain().focus().undo().run()}
//       >
//         undo
//       </button>
//       <button
//         onClick={() => editor.chain().focus().redo().run()}
//         disabled={!editor.can().chain().focus().redo().run()}
//       >
//         redo
//       </button>
//       <button
//         onClick={() => editor.chain().focus().setColor("#958DF1").run()}
//         className={
//           editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
//         }
//       >
//         purple
//       </button>
//     </>
//   );
// };

// const extensions = [
//   Color.configure({ types: [TextStyle.name, ListItem.name] }),
//   TextStyle.configure({ types: [ListItem.name] }),
//   StarterKit.configure({
//     bulletList: {
//       keepMarks: true,
//       keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//     },
//     orderedList: {
//       keepMarks: true,
//       keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//     },
//   }),
// ];

// const content = `
// <h2>
//   Hi there,
// </h2>
// <p>
//   this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
// </p>
// <ul>
//   <li>
//     That’s a bullet list with one …
//   </li>
//   <li>
//     … or two list items.
//   </li>
// </ul>
// <p>
//   Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
// </p>
// <pre><code class="language-css">body {
// display: none;
// }</code></pre>
// <p>
//   I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
// </p>
// <blockquote>
//   Wow, that’s amazing. Good work, boy! 👏
//   <br />
//   — Mom
// </blockquote>
// `;

// // eslint-disable-next-line react/display-name
// export default () => {
//   return (
//     <EditorProvider
//       slotBefore={<MenuBar />}
//       extensions={extensions}
//       content={content}
//     ></EditorProvider>
//   );
// };
