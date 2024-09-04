package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "role")
public class Role {
    @Id
    private Long id;
    private String name;
    private String code;
    @Column(name = "description", columnDefinition = "text")
    private String description;

    @ManyToMany
    @JoinTable(name = "user_role",
    joinColumns = @JoinColumn(name = "role_is"),
    inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> users;
}
