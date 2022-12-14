const leftInfo = [
    {
        title: "姓名",
        info: "何中峰(Herzorf)",
    },
    {
        title: "人生目标",
        info: "身体自由，思想自由，财务自由",
    },
    {
        title: "目前具备的技能",
        info: "web开发",
    },
    {
        title: "以后将要具备的技能",
        info: "全栈开发",
    },
];
const rightInfo = [
    {
        title: "工作经验",
        info: "2022.8.1---至今",
    },
    {
        title: "年龄",
        info: "23",
    },
    {
        title: "邮箱",
        info: "1446450047@qq.com",
    },
    {
        title: "目前居住地",
        info: "上海",
    },
];

const advantageItem = [
    {
        name: "HTML",
        class: "HTML",
        percent: "70%",
    },
    {
        name: "CSS",
        class: "CSS",
        percent: "88%",
    },
    {
        name: "JavaScript",
        class: "JavaScript",
        percent: "80%",
    },
    {
        name: "Vue",
        class: "Vue",
        percent: "60%",
    },
    {
        name: "React",
        class: "React",
        percent: "80%",
    },
    {
        name: "Docker",
        class: "Docker",
        percent: "60%",
    },
    {
        name: "Go",
        class: "Go",
        percent: "40%",
    },
    {
        name: "TypeScript",
        class: "TypeScript",
        percent: "50%",
    },
];

const oberveApper = function (element: Element) {
    const observe = new IntersectionObserver(
        function (entry) {
            if (entry[0].isIntersecting) {
                element.classList.add("appear");
            } else {
                element.classList.remove("appear");
            }
        },
        { threshold: 0.1 }
    );
    observe.observe(element);
};

export { leftInfo, rightInfo, oberveApper, advantageItem };
