document.addEventListener('DOMContentLoaded', function() {
    const root = document.querySelector('.root');

    const heading = document.createElement('h2');
    heading.textContent = 'Tugas 2 Lab Praktikum Pemrograman Web';
    heading.className = 'text-center mb-4';

    const container = document.createElement('div');
    container.className = 'd-flex justify-content-center align-items-start';

    const form = document.createElement('form');
    form.id = 'dataForm';
    form.className = 'form-container border p-4 rounded shadow-sm w-50';

    const fields = [
        { label: 'Nama Lengkap:', id: 'namaLengkap', type: 'text', placeholder: 'Farhan Ar Rahman' },
        { label: 'NIM:', id: 'nim', type: 'text', placeholder: '231401081' },
        { label: 'KOM:', id: 'kom', type: 'text', placeholder: 'C' },
        { label: 'Upload Photo:', id: 'photo', type: 'file', accept: 'image/*' }
    ];

    fields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'mb-3';

        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        if (field.accept) input.accept = field.accept;
        if (field.placeholder) input.placeholder = field.placeholder;
        input.required = true;
        input.className = 'form-control';

        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.className = 'submit-button btn btn-primary';

    const submitButtonContainer = document.createElement('div');
    submitButtonContainer.className = 'submit-button-container';

    submitButtonContainer.appendChild(submitButton);

form.appendChild(submitButtonContainer);

    const result = document.createElement('div');
    result.id = 'result';
    result.className = 'result-container border p-4 rounded shadow-sm d-none ml-4';

    container.appendChild(form);
    container.appendChild(result);
    root.appendChild(heading);
    root.appendChild(container);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const namaLengkap = document.getElementById('namaLengkap').value;
        const nim = document.getElementById('nim').value;
        const kom = document.getElementById('kom').value;
        const photo = document.getElementById('photo').files[0];

        if (photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                result.innerHTML = '';
                const resultDiv = document.createElement('div');
                resultDiv.className = 'text-center';

                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Uploaded Photo';
                img.className = 'img-thumbnail mb-2 mx-auto';

                const pNamaLengkap = document.createElement('p');
                pNamaLengkap.textContent = `Nama Lengkap: ${namaLengkap}`;

                const pNim = document.createElement('p');
                pNim.textContent = `NIM: ${nim}`;

                const pKom = document.createElement('p');
                pKom.textContent = `KOM: ${kom}`;

                resultDiv.appendChild(img);
                resultDiv.appendChild(pNamaLengkap);
                resultDiv.appendChild(pNim);
                resultDiv.appendChild(pKom);

                result.appendChild(resultDiv);
                result.classList.remove('d-none');
                form.className += ' form-submitted'; 

                
                alert('Data successfully submitted!');
            };
            reader.readAsDataURL(photo);
        }
    });
});