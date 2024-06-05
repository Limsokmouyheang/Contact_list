        var currentRow = null;

            function submitForm() {
                var name = document.getElementById('name').value;
                var phone = document.getElementById('phone').value;
                var email = document.getElementById('email').value;
                var date = new Date().toLocaleDateString();

                if (currentRow) {
                    currentRow.cells[1].innerText = name;
                    currentRow.cells[2].innerText = phone;
                    currentRow.cells[3].innerText = email;
                    currentRow.cells[4].innerText = date;
                    currentRow = null;
                } else {
                    var tableBody = document.getElementById('contactTableBody');
                    var newRow = tableBody.insertRow();
                    newRow.innerHTML = "<td></td><td>" + name + "</td><td>" + phone + "</td><td>" + email + "</td><td>" + date + "</td><td><button class='btn btn-info btn-sm' id='btn-sm' onclick='editRow(this.parentNode.parentNode)'>Edit</button> <button class='btn btn-danger btn-sm' id='btn-sm' onclick='deleteRow(this.parentNode.parentNode)'>Delete</button></td>";
                }

                clearForm();
            }

            function editRow(row) {
                currentRow = row;
                document.getElementById('name').value = row.cells[1].innerText;
                document.getElementById('phone').value = row.cells[2].innerText;
                document.getElementById('email').value = row.cells[3].innerText;
            }

            function deleteRow(row) {
                if (confirm("Are you sure you want to delete this contact?")) {
                    row.remove();
                }
            }

            function clearForm() {
                document.getElementById('name').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('email').value = '';
            }
