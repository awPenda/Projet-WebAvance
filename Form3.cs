using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form3 : Form
    {
        public Form3()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // Redirection vers une nouvelle page
            data nouvellePage = new data();
            nouvellePage.Show();

            // Fermer la page de connexion si nécessaire
            this.Hide();
        }

        private void Form3_Load(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form5 nouvellePage = new Form5();
            nouvellePage.Show();

            // Fermer la page de connexion si nécessaire
            this.Hide();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Form6 nouvellePage = new Form6();
            nouvellePage.Show();

            // Fermer la page de connexion si nécessaire
            this.Hide();
        }
    }

}

