// static/js/main.js

function showProfile() {
    Swal.fire({
        icon: 'info',
        title: 'Профиль пользователя',
        html: `
            <p><strong>Имя:</strong> Айнур Ахтямов</p>
            <p><strong>Роль:</strong> Инженер</p>
            <p><strong>Организация:</strong> ООО «РИНПО»</p>
        `,
        confirmButtonText: 'Закрыть'
    });
}

function showSettings() {
    Swal.fire({
        icon: 'success',
        title: 'Настройки',
        text: 'В этом окне можно изменить настройки оборудования.',
        confirmButtonText: 'Сохранить'
    });
}

function showLogoutConfirm() {
    Swal.fire({
        title: 'Выход',
        text: 'Вы действительно хотите выйти?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да, выйти',
        cancelButtonText: 'Отмена'
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('logout-form').submit();
        }
    });
}

document.querySelectorAll('.tree-node > ul').forEach(ul => {
    const parentLi = ul.parentElement;

    // Добавь toggle-иконку
    const span = document.createElement('span');
    span.className = 'toggle-icon';
    span.style.cursor = 'pointer';
    span.innerHTML = '▶';

    parentLi.insertBefore(span, parentLi.firstChild);

    // При клике — раскрываем/скрываем дочерние элементы
    span.addEventListener('click', function () {
        const isOpen = this.classList.contains('open');
        this.classList.toggle('open');
        ul.style.display = isOpen ? 'none' : 'block';
    });
});