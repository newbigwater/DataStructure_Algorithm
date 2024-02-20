/*
1. 추상 자료형
 - 어떠한 데이터와 그 데이터에 대한 연산 표기한 자료형
*/

/*
2. 연결리스트의 추상자료형
 1) 모든 데이터 출력 : printAll()
 2) 모든 데이터 제거 : clear()
 3) 인덱스 삽입 : insertAt(index, data);
 4) 마지막 삽입 : insertLast(data);
 5) 인덱스 삭제 : deleteAt(index);
 6) 마지막 삭제 : deleteLast();
 7) 인덱스 읽기 : getNodeAt(index);
*/

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.count = 0;
    }

    printAll(){
        let idx = 0;
        let output = "{";
        let curNode = this.head;
        while(curNode != null){
            //console.log("[" + idx++ + "] " + curNode.data);
            output += ("[" + idx++ + " : " + curNode.data + "]");
            curNode = curNode.next;

            if(null != curNode){
                output += ", ";
            }
        }
        
        console.log(output += "}");
        console.log("Count : " + this.count);
        console.log("\n");
    }

    clear()
    {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data){
        if( index < 0 || this.count < index )
            throw new Error("범위를 넘어갔습니다.");

        let newNode = new Node(data);
        if(index == 0){
            newNode.Next = this.head;
            this.head = newNode;
        }
        else{
            let curNode = this.head;
            for(let i = 0; i < index - 1; i++){
                curNode = curNode.next;
            }

            newNode.next = curNode.next;
            curNode.next = newNode;
        }

        this.count++;
    }

    insertLast(data){
        this.insertAt(this.count, data);
    }

    deleteAt(index){
        if( index < 0 || this.count <= index )
            throw new Error("범위를 넘어갔습니다.");

        let curNode = this.head;
        if(index == 0){
            console.log("[-1] : NULL");
            let delNode = curNode;
            this.head = curNode.next;
            this.count--;

            return delNode;
        }
        else{
            let i = 0
            for(; i < index - 1; i++){
                console.log("[" + i + "] : " + curNode.data);
                curNode = curNode.next;
            }
            console.log("[" + i + "] : " + curNode.data);
            let delNode = curNode.next;
            curNode.next = delNode.next;
            this.count--;

            return delNode;
        }
    }

    deleteLast(){
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index){
        if( index < 0 || this.count <= index )
            throw new Error("범위를 넘어갔습니다.");

        let curNode = this.head;
        if(index == 0){
            return curNode;
        }
        else{
            let i = 0
            for(; i < index; i++){
                curNode = curNode.next;
            }

            return curNode;
        }
    }
}

export { Node, LinkedList };