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

namespace WindowsFormsApp1
{
    public partial class data : Form
    {
        public data()
        {
            InitializeComponent();
        }
        SqlConnection con = new SqlConnection("Data Source=JUBA;Initial Catalog=master;Integrated Security=True");
        private void Form1_Load(object sender, EventArgs e)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "SELECT * from users";
            cmd.ExecuteNonQuery();
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            dataGridView1.DataSource = dt;
            con.Close();
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            // Redirection vers une nouvelle page
            Form2 nouvellePage = new Form2();
            nouvellePage.Show();

            // Fermer la page de connexion si nécessaire
            this.Hide();
        }        // Redirection vers une nouvelle page

        private void button2_Click(object sender, EventArgs e)
        {

            Form4 nouvellePage = new Form4();

            nouvellePage.textBox4.Text = dataGridView1.CurrentRow.Cells[0].Value.ToString();
            nouvellePage.textBox1.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
            nouvellePage.comboBox1.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
            nouvellePage.textBox2.Text = dataGridView1.CurrentRow.Cells[3].Value.ToString();
            nouvellePage.textBox3.Text = dataGridView1.CurrentRow.Cells[4].Value.ToString();
            nouvellePage.Show();
        }
        
        private void button3_Click(object sender, EventArgs e)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = " DELETE USERS WHERE ID = '" + dataGridView1.CurrentRow.Cells[0].Value.ToString() +"'";
            cmd.ExecuteNonQuery();
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            dataGridView1.DataSource = dt;
            con.Close();

            con.Open();
            SqlCommand cmd1 = con.CreateCommand();
            cmd1.CommandType = CommandType.Text;
            cmd1.CommandText = "SELECT * from users";
            cmd1.ExecuteNonQuery();
            DataTable dt1 = new DataTable();
            SqlDataAdapter da1 = new SqlDataAdapter(cmd1);
            da1.Fill(dt1);
            dataGridView1.DataSource = dt1;
            con.Close();
        
    }

        private void button4_Click(object sender, EventArgs e)
        {
            Form3 nouvellePage = new Form3();
            nouvellePage.Show();

            // Fermer la page de connexion si nécessaire
            this.Hide();
        }
    }
}
