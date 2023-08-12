namespace TodoList.Models
{
    public class TodoItem
    {
        public long id { get; set; }
        public string? Name { get; set; }
        public bool isComplete { get; set; }
        public string? Password { get; set; }
    }
}