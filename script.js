const imageDivs = document.querySelectorAll('.image');
        let activeDiv = null;
        let initialX, initialY;

        imageDivs.forEach((div) => {
            div.addEventListener('mousedown', handleMouseDown);
            div.addEventListener('mousemove', handleMouseMove);
            div.addEventListener('mouseup', handleMouseUp);
        });

        function handleMouseDown(e) {
            activeDiv = e.target;
            initialX = e.clientX - activeDiv.getBoundingClientRect().left;
            initialY = e.clientY - activeDiv.getBoundingClientRect().top;
            activeDiv.style.cursor = 'grabbing';
        }

        function handleMouseMove(e) {
            if (!activeDiv) return;
            const newX = e.clientX - initialX;
            const newY = e.clientY - initialY;
            activeDiv.style.left = `${newX}px`;
            activeDiv.style.top = `${newY}px`;
        }

        function handleMouseUp(e) {
            if (!activeDiv) return;
            activeDiv.style.cursor = 'grab';
            activeDiv = null;
            // Implement swapping logic here if divs overlap
        }