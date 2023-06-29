using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace WindowsFormsApp1
{
    public partial class Form4 : Form
    {
        public Form4()
        {
            InitializeComponent();
            //textBox4.Visible = false;
        }
        SqlConnection con = new SqlConnection("Data Source=JUBA;Initial Catalog=master;Integrated Security=True");
        private void button1_Click(object sender, EventArgs e)
        {
            string contenuTextBox = textBox4.Text;
            int valeurEntiere = int.Parse(contenuTextBox);
            con.Open();
            SqlCommand command = new SqlCommand("UPDATE users SET name= '" + textBox1.Text + "',  student= '" + comboBox1.Text + "',   email= '" + textBox2.Text + "',   password = '" + textBox3.Text + "'   WHERE ID = '" + textBox4.Text + "' ", con);            
            command.ExecuteNonQuery();
            

                        con.Close();
            data nouvellePage = new data();
            nouvellePage.Show();

            this.Hide();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            data nouvellePage = new data();
            nouvellePage.Show();

            // Fermer la page de connexion si nécessaire
            this.Hide();
        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }
    }
    }

