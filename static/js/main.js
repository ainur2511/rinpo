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

function toggleNode(icon) {
    const parentLi = icon.parentElement;
    const subTree = parentLi.querySelector("ul.tree");

    if (!subTree) return;

    const isOpen = icon.classList.contains('open');
    icon.classList.toggle('open', !isOpen);
    subTree.style.display = isOpen ? 'none' : 'block';
}