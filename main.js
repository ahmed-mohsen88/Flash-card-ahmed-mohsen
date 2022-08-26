var former = document.getElementById("former");
var add_question = document.getElementById("add_question");
var question = document.getElementById("ques");
var answer = document.getElementById("answer");
var sub = document.getElementById("submit");
var closeer = document.getElementById("svg");
var shower = document.getElementById("shower");
var n_question = document.querySelector(".n_question");
var gen_div = document.querySelectorAll(".gen_div");
var n_answer = document.querySelectorAll(".n_answer");


add_question.onclick = () => {
  former.style.display = "inline-flex";
};
closeer.onclick = () => {
  former.style.display = "none";
};


(function delete_div() {
  var del_div = document.querySelectorAll(".deleted");
  del_div.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target);
      e.target.parentElement.remove();
      console.log(document.querySelectorAll(".gen_div"));
    });
  });
})();

former.onsubmit = () => {
    if (!question.value || !answer.value) {
        alert("please enter valid values");
        return false
    }
  let div = document.createElement("div");
  div.classList.add("gen_div");
  shower.appendChild(div);
  div.innerHTML = `<h2 class="n_question">${question.value}</h2>
  <p href="" class="hide_answer">Show/Hide Answer</p>
  <h2 class="n_answer" class="n_answer">${answer.value}</h2>
  <button class="edit">EDIT</button>
  <button class="deleted">DELETE</button>
</div>`;
  question.value = "";
  answer.value = "";

  console.log(
    (function delete_div() {
      var del_div = document.querySelectorAll(".deleted");
      del_div.forEach((el) => {
        el.addEventListener("click", (e) => {
          console.log(e.target);
          e.target.parentElement.remove();
          console.log(document.querySelectorAll(".gen_div"));
        });
      });
    })()
  );
  console.log(
    (function hidden_answer() {
      var hide_answer = document.querySelectorAll(".hide_answer");
      hide_answer.forEach((el) => {
        el.addEventListener("click", (e) => {
          console.log(e.target.nextElementSibling);
          if (e.target.nextElementSibling.style.display == "block") {
            e.target.nextElementSibling.style.display = "none";
          } else {
            e.target.nextElementSibling.style.display = "block";
          }
        });
      });
    })()
  );
  console.log(
    (function edit_inp() {
      var edit = document.querySelectorAll(".edit");
      edit.forEach((ele) => {
        ele.addEventListener("click", (e) => {
          console.log(
            e.target.parentElement.parentElement.previousElementSibling
          );
          e.target.parentElement.parentElement.previousElementSibling.style.display =
            "inline-flex";
          question.value +=
            e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
          answer.value += e.target.previousElementSibling.textContent;
          e.target.parentElement.remove();
        });
      });
    })()
  );
  return false;
};

(function hidden_answer() {
  var hide_answer = document.querySelectorAll(".hide_answer");
  hide_answer.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target.nextElementSibling);
      if (e.target.nextElementSibling.style.display == "block") {
        e.target.nextElementSibling.style.display = "none";
      } else {
        e.target.nextElementSibling.style.display = "block";
      }
    });
  });
})();

(function edit_inp() {
  var edit = document.querySelectorAll(".edit");
  edit.forEach((ele) => {
    var n_answer = document.querySelectorAll(".n_answer");
    ele.addEventListener("click", (e) => {
      console.log(e.target.parentElement.parentElement.previousElementSibling);
      e.target.parentElement.parentElement.previousElementSibling.style.display =
        "inline-flex";
      question.value +=
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
      answer.value += e.target.previousElementSibling.textContent;
      e.target.parentElement.remove();
    });
  });
})();
