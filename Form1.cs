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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {

            string nomUtilisateur = textBox2.Text;
            string motDePasse = textBox1.Text;

            // Vérifier les informations de connexion
            if (nomUtilisateur == "admin" && motDePasse == "password")
            {
                MessageBox.Show("Connexion réussie !");
                // Redirection vers une nouvelle page
                Form3 nouvellePage = new Form3();
                nouvellePage.Show();

                // Fermer la page de connexion si nécessaire
                this.Hide();
            }
            else
            {
                MessageBox.Show("Nom d'utilisateur ou mot de passe incorrect !");
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
