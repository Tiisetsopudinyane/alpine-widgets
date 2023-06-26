
  
    document.addEventListener("click", () => {
        Alpine.data('data', function () {
            return {
                count:0,
                increment()
                {
                    this.count++;
                },
                decrement()
                {
                    this.count--;
                }
            }});
    });