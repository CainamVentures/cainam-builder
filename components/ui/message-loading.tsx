function MessageLoading() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground"
            data-oid="y6e3451"
        >
            <circle cx="4" cy="12" r="2" fill="currentColor" data-oid="1q3u.c4">
                <animate
                    id="spinner_qFRN"
                    begin="0;spinner_OcgL.end+0.25s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="12;6;12"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    data-oid="sllikpe"
                />
            </circle>
            <circle cx="12" cy="12" r="2" fill="currentColor" data-oid="2u6:j5j">
                <animate
                    begin="spinner_qFRN.begin+0.1s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="12;6;12"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    data-oid="_w:xkh5"
                />
            </circle>
            <circle cx="20" cy="12" r="2" fill="currentColor" data-oid="63v6ab5">
                <animate
                    id="spinner_OcgL"
                    begin="spinner_qFRN.begin+0.2s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="12;6;12"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    data-oid="ukugh9."
                />
            </circle>
        </svg>
    );
}

export { MessageLoading };
