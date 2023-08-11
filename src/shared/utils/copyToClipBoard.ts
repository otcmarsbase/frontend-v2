export default async function copyToClipboard(
    _textToCopy: string | number,
): Promise<void> {
    const textToCopy = JSON.stringify(_textToCopy);

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy);
    } else {
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        await new Promise<void>((res, rej) => {
            document.execCommand("copy") ? res() : rej();
            textArea.remove();
        });
    }
}
