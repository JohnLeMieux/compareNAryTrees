class TreeNode {
    #value
    #children

    constructor(value) {
        this.#value = value;
        this.#children = [];
    }

    addChild(child) {
        this.#children.push(child);
    }

    get value() {
        return this.#value;
    }

    get children() {
        return this.#children;
    }
}

function nAryTreesAreEqual(root1, root2) {
    if (!root1 && !root2) {
        return true;
    }
    if ((root1 && !root2) || (!root1 && root2) || (root1.value != root2.value) || (root1.children.length != root2.children.length)) {
        return false;
    }
    for (let i in root1.children) {
        if (!nAryTreesAreEqual(root1.children[i], root2.children[i])) {
            return false;
        }
    }
    return true;
}