let handle = null;

export default function() {
    handle = Date.now();
    
    function say(){
        console.log(handle);
    }
}