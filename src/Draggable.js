const { useRef, useEffect } = require("react");

import theme from './theme';

export const Draggable = ({ state, setState, children, useNoParent= false, fixOnAxis, url, color, size, transform, filter, mixBlendMode, mask = false, className}) => {
    const ref = useRef();

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        console.log(state);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, [state.dragging]);

    // calculate relative position to the mouse and set dragging=true
    const onMouseDown = (e) => {
        console.log(e.target.classList);
        //if (e.target.className == "dragImage" && e.target.classList.contains('dragMask')) return;
        // only left mouse button
        if (e.button !== 0) return;
        let pos = ref.current.getBoundingClientRect();
        const rel = {
            x: e.pageX - pos.left,
            y: e.pageY - pos.top
        };
        if (fixOnAxis === "y") {
            rel.x = initialPos.x;
        }
        if (fixOnAxis === "x") {
            rel.y = initialPos.y;
        }
        setState((p) => ({ ...p, dragging: true, rel }));
        e.stopPropagation();
        e.preventDefault();
    };
    const onMouseUp = (e) => {
        setState((p) => ({ ...p, dragging: false }));
        //e.stopPropagation();
        e.preventDefault();
    };
    const onMouseMove = (e) => {
        if (!state.dragging) return;
        var parent = e.target.parentElement;

        var parentX = (parent && !useNoParent) ? parent.getBoundingClientRect().left : 0;
        var parentY = (parent && !useNoParent) ? parent.getBoundingClientRect().top : 0;
        if(parent == null){ return }
        const pos = {
            x: e.pageX - state.rel.x - parentX,
            y: e.pageY - state.rel.y - parentY
        };
        if (fixOnAxis === "y") {
            pos.x = initialPos.x;
        }
        if (fixOnAxis === "x") {
            pos.y = initialPos.y;
        }
        setState((p) => ({ ...p, pos }));
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <div
            ref={ref}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            className = {className}
            style={{
                cursor: "move",
                position: "absolute",
                left: state.pos.x,
                top: state.pos.y,

                textAlign: 'center',

                height: size+"px",
                width: size+"px",
                backgroundImage: `url(${url})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                boxSizing: 'border-box',

                transform: transform,

                //border: 'dotted 2px rgba(0,0,0,0.4)',
                border: (className === "dragToolBox") ? `solid 1px ${theme.palette.div.border}` : 'none',
                borderRadius: '5px',
                display: (className === "dragToolBox") ? 'flex' : 'block',
                flexDirection: (className === "dragToolBox") ? 'column' : 'none',
                padding: (className === "dragToolBox") ? '50px' : 'none',

                backgroundColor: mask ? 'white' : color,

                mixBlendMode: mixBlendMode,
                filter: filter
            }}
        >
            {children}
        </div>
    );
};
